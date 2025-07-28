import React, { useState, useRef, useEffect } from 'react'
import { ChatOpenAI } from '@langchain/openai'
import { HumanMessage, AIMessage } from '@langchain/core/messages'
import { MessageCircle, Send, X, Bot, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

/**
 * Chat message interface definition
 */
interface Message {
  id: string
  content: string
  type: 'human' | 'ai'
  timestamp: Date
}

/**
 * ChatBot component props interface
 */
interface ChatBotProps {
  /** OpenAI API key */
  apiKey?: string
  /** Custom CSS class name */
  className?: string
  /** Maximum messages per session */
  maxMessagesPerSession?: number
  /** Rate limit in milliseconds */
  rateLimitMs?: number
  /** Maximum session duration in minutes */
  maxSessionDuration?: number
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

  // Initialize ChatOpenAI instance
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

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  /**
   * Check if session duration exceeds limit
   */
  const checkSessionDuration = (): { valid: boolean; reason?: string } => {
    const sessionDuration = (Date.now() - sessionStartTime) / (1000 * 60)
    if (sessionDuration > maxSessionDuration) {
      return {
        valid: false,
        reason: t('chatbot.errors.sessionTimeout', { minutes: maxSessionDuration }),
      }
    }
    return { valid: true }
  }

  /**
   * Check if message count exceeds limit
   */
  const checkMessageLimit = (): { valid: boolean; reason?: string } => {
    if (messageCount >= maxMessagesPerSession) {
      return {
        valid: false,
        reason: t('chatbot.errors.messageLimit', { count: maxMessagesPerSession }),
      }
    }
    return { valid: true }
  }

  /**
   * Check if request rate exceeds limit
   */
  const checkRateLimit = (): { valid: boolean; reason?: string } => {
    const now = Date.now()
    if (now - lastRequestTime < rateLimitMs) {
      const waitTime = Math.ceil((rateLimitMs - (now - lastRequestTime)) / 1000)
      return { valid: false, reason: t('chatbot.errors.rateLimit', { seconds: waitTime }) }
    }
    return { valid: true }
  }

  /**
   * Comprehensive check of all usage limits
   */
  const checkUsageLimits = (): { allowed: boolean; reason?: string } => {
    const sessionCheck = checkSessionDuration()
    if (!sessionCheck.valid) {
      return { allowed: false, reason: sessionCheck.reason }
    }

    const messageCheck = checkMessageLimit()
    if (!messageCheck.valid) {
      return { allowed: false, reason: messageCheck.reason }
    }

    const rateCheck = checkRateLimit()
    if (!rateCheck.valid) {
      return { allowed: false, reason: rateCheck.reason }
    }

    return { allowed: true }
  }

  /**
   * Create user message object
   */
  const createUserMessage = (content: string): Message => ({
    id: Date.now().toString(),
    content: content.trim(),
    type: 'human',
    timestamp: new Date(),
  })

  /**
   * Create AI message object
   */
  const createAIMessage = (): Message => ({
    id: (Date.now() + 1).toString(),
    content: '',
    type: 'ai',
    timestamp: new Date(),
  })

  /**
   * Create error message object
   */
  const createErrorMessage = (content: string): Message => ({
    id: Date.now().toString(),
    content,
    type: 'ai',
    timestamp: new Date(),
  })

  /**
   * Handle API errors and return corresponding error message
   */
  const handleAPIError = (error: unknown): string => {
    console.error('Chat error:', error)

    if (error instanceof Error) {
      if (error.message.includes('rate_limit')) {
        setIsBlocked(true)
        setTimeout(() => setIsBlocked(false), 60000) // Unblock after 1 minute
        return t('chatbot.errors.apiRateLimit')
      }

      if (error.message.includes('quota')) {
        setIsBlocked(true)
        return t('chatbot.errors.quotaExceeded')
      }

      return t('chatbot.errors.specific', { message: error.message })
    }

    return t('chatbot.errors.general')
  }

  /**
   * Build message history
   */
  const buildMessageHistory = (userMessage: Message) => {
    const messageHistory = messages.map(msg =>
      msg.type === 'human' ? new HumanMessage(msg.content) : new AIMessage(msg.content)
    )
    messageHistory.push(new HumanMessage(userMessage.content))
    return messageHistory
  }

  /**
   * Handle streaming response
   */
  const handleStreamResponse = async (
    messageHistory: (HumanMessage | AIMessage)[],
    tempAiMessageId: string
  ) => {
    if (!chatRef.current) {
      throw new Error(t('chatbot.errors.noApiKey'))
    }

    const stream = await chatRef.current.stream(messageHistory)
    let fullContent = ''

    for await (const chunk of stream) {
      const content = chunk.content as string
      if (content) {
        fullContent += content
        // Update message content in real-time
        setMessages(prev =>
          prev.map(msg => (msg.id === tempAiMessageId ? { ...msg, content: fullContent } : msg))
        )
      }
    }
  }

  /**
   * Check and show warning when approaching limits
   */
  const checkAndShowWarning = () => {
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
  }

  /**
   * Main message sending handler function
   */
  const handleSendMessage = async () => {
    // Basic validation: check input, loading state and blocked state
    if (!inputValue.trim() || isLoading || isBlocked) return

    // Check usage limits (session duration, message count, request rate)
    const limitCheck = checkUsageLimits()
    if (!limitCheck.allowed) {
      const errorMessage = createErrorMessage(`⚠️ ${limitCheck.reason}`)
      setMessages(prev => [...prev, errorMessage])
      return
    }

    // Create and add user message
    const userMessage = createUserMessage(inputValue)
    setMessages(prev => [...prev, userMessage])

    // Reset input and update state
    setInputValue('')
    setIsLoading(true)
    setMessageCount(prev => prev + 1)
    setLastRequestTime(Date.now())

    try {
      // Build message history
      const messageHistory = buildMessageHistory(userMessage)

      // Create temporary AI message for streaming output
      const tempAiMessage = createAIMessage()
      const tempAiMessageId = tempAiMessage.id
      setMessages(prev => [...prev, tempAiMessage])

      // Handle streaming response
      await handleStreamResponse(messageHistory, tempAiMessageId)

      // Check if approaching message limit and show warning
      checkAndShowWarning()
    } catch (error) {
      // Handle error and show error message
      const errorContent = handleAPIError(error)
      const errorMessage = createErrorMessage(errorContent)
      setMessages(prev => [...prev, errorMessage])
    } finally {
      // Ensure loading state is reset
      setIsLoading(false)
    }
  }

  // Handle keyboard events
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  // Format time
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className='bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110'
          aria-label={t('chatbot.openChat')}
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className='bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col border border-gray-200'>
          {/* Header */}
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

          {/* Message area */}
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

          {/* Input area */}
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
