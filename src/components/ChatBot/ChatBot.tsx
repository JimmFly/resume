import React, { useState, useRef, useEffect } from 'react'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage, AIMessage } from '@langchain/core/messages'
import { MessageCircle, Send, X, Bot, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface Message {
  id: string
  content: string
  type: 'human' | 'ai'
  timestamp: Date
}

interface ChatBotProps {
  apiKey?: string
  className?: string
  maxMessagesPerSession?: number
  rateLimitMs?: number
  maxSessionDuration?: number // in minutes
}

const ChatBot: React.FC<ChatBotProps> = ({
  apiKey,
  className = '',
  maxMessagesPerSession = 10,
  rateLimitMs = 3000,
  maxSessionDuration = 30,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: t('chatbot.welcome'),
      type: 'ai',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [messageCount, setMessageCount] = useState(0)
  const [lastRequestTime, setLastRequestTime] = useState(0)
  const [sessionStartTime] = useState(Date.now())
  const [isBlocked, setIsBlocked] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatRef = useRef<ChatOpenAI | null>(null)

  // 初始化 ChatOpenAI 实例
  useEffect(() => {
    if (apiKey) {
      chatRef.current = new ChatOpenAI({
        apiKey: apiKey,
        modelName: 'gpt-3.5-turbo',
        temperature: 0.7,
        streaming: true,
      })
    }
  }, [apiKey])

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // 检查使用限制
  const checkUsageLimits = (): { allowed: boolean; reason?: string } => {
    // 检查会话时长
    const sessionDuration = (Date.now() - sessionStartTime) / (1000 * 60)
    if (sessionDuration > maxSessionDuration) {
      return {
        allowed: false,
        reason: t('chatbot.errors.sessionTimeout', { minutes: maxSessionDuration }),
      }
    }

    // 检查消息数量
    if (messageCount >= maxMessagesPerSession) {
      return {
        allowed: false,
        reason: t('chatbot.errors.messageLimit', { count: maxMessagesPerSession }),
      }
    }

    // 检查请求频率
    const now = Date.now()
    if (now - lastRequestTime < rateLimitMs) {
      const waitTime = Math.ceil((rateLimitMs - (now - lastRequestTime)) / 1000)
      return { allowed: false, reason: t('chatbot.errors.rateLimit', { seconds: waitTime }) }
    }

    return { allowed: true }
  }

  // 发送消息
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading || isBlocked) return

    // 检查使用限制
    const limitCheck = checkUsageLimits()
    if (!limitCheck.allowed) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: `⚠️ ${limitCheck.reason}`,
        type: 'ai',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
      return
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      type: 'human',
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)
    setMessageCount(prev => prev + 1)
    setLastRequestTime(Date.now())

    try {
      if (!chatRef.current) {
        throw new Error(t('chatbot.errors.noApiKey'))
      }

      // 构建消息历史
      const messageHistory = messages.map(msg =>
        msg.type === 'human' ? new HumanMessage(msg.content) : new AIMessage(msg.content)
      )
      messageHistory.push(new HumanMessage(userMessage.content))

      // 创建临时 AI 消息用于流式输出
      const tempAiMessageId = (Date.now() + 1).toString()
      const tempAiMessage: Message = {
        id: tempAiMessageId,
        content: '',
        type: 'ai',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, tempAiMessage])

      // 使用流式输出
      const stream = await chatRef.current.stream(messageHistory)
      let fullContent = ''

      for await (const chunk of stream) {
        const content = chunk.content as string
        if (content) {
          fullContent += content
          // 实时更新消息内容
          setMessages(prev =>
            prev.map(msg => (msg.id === tempAiMessageId ? { ...msg, content: fullContent } : msg))
          )
        }
      }

      // 检查是否接近限制
      if (messageCount + 1 >= maxMessagesPerSession - 2) {
        const warningMessage: Message = {
          id: (Date.now() + 2).toString(),
          content: t('chatbot.warning', { remaining: maxMessagesPerSession - messageCount - 1 }),
          type: 'ai',
          timestamp: new Date(),
        }
        setTimeout(() => {
          setMessages(prev => [...prev, warningMessage])
        }, 1000)
      }
    } catch (error) {
      console.error('Chat error:', error)
      let errorContent = t('chatbot.errors.general')

      if (error instanceof Error) {
        if (error.message.includes('rate_limit')) {
          errorContent = t('chatbot.errors.apiRateLimit')
          setIsBlocked(true)
          setTimeout(() => setIsBlocked(false), 60000) // 1分钟后解除阻止
        } else if (error.message.includes('quota')) {
          errorContent = t('chatbot.errors.quotaExceeded')
          setIsBlocked(true)
        } else {
          errorContent = t('chatbot.errors.specific', { message: error.message })
        }
      }

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: errorContent,
        type: 'ai',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  // 处理键盘事件
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // 格式化时间
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* 聊天按钮 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className='bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110'
          aria-label={t('chatbot.openChat')}
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* 聊天窗口 */}
      {isOpen && (
        <div className='bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col border border-gray-200'>
          {/* 头部 */}
          <div className='bg-blue-600 text-white p-4 rounded-t-lg flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <Bot size={20} />
              <span className='font-medium'>{t('chatbot.title')}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className='hover:bg-blue-700 p-1 rounded transition-colors'
              aria-label={t('chatbot.closeChat')}
            >
              <X size={18} />
            </button>
          </div>

          {/* 消息区域 */}
          <div className='flex-1 overflow-y-auto p-4 space-y-4'>
            {messages.map(message => (
              <div
                key={message.id}
                className={`flex ${message.type === 'human' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.type === 'human'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className='flex items-start space-x-2'>
                    {message.type === 'ai' && <Bot size={16} className='mt-1 flex-shrink-0' />}
                    <div className='flex-1'>
                      <p className='text-sm whitespace-pre-wrap'>{message.content}</p>
                      <p className={`text-xs mt-1 opacity-70`}>{formatTime(message.timestamp)}</p>
                    </div>
                    {message.type === 'human' && <User size={16} className='mt-1 flex-shrink-0' />}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className='flex justify-start'>
                <div className='bg-gray-100 text-gray-800 p-3 rounded-lg max-w-[80%]'>
                  <div className='flex items-center space-x-2'>
                    <Bot size={16} />
                    <div className='flex space-x-1'>
                      <div className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'></div>
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: '0.1s' }}
                      ></div>
                      <div
                        className='w-2 h-2 bg-gray-400 rounded-full animate-bounce'
                        style={{ animationDelay: '0.2s' }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* 输入区域 */}
          <div className='p-4 border-t border-gray-200'>
            <div className='flex space-x-2'>
              <input
                type='text'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chatbot.placeholder')}
                className='flex-1 border-2 border-gray-400 rounded-lg px-3 py-2 text-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm'
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading || isBlocked}
                className='bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors'
                aria-label={t('chatbot.sendMessage')}
              >
                <Send size={16} />
              </button>
            </div>
            {!apiKey && <p className='text-xs text-red-500 mt-2'>{t('chatbot.configureApiKey')}</p>}
            <div className='flex justify-between text-xs text-gray-500 mt-1'>
              <span>
                {t('chatbot.messageCount', { current: messageCount, max: maxMessagesPerSession })}
              </span>
              <span>
                {t('chatbot.sessionDuration', {
                  minutes: Math.floor((Date.now() - sessionStartTime) / (1000 * 60)),
                })}
              </span>
            </div>
            {isBlocked && <p className='text-xs text-red-500 mt-1'>{t('chatbot.blocked')}</p>}
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatBot
