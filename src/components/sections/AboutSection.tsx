import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">关于我</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              我是杨晋飞，一名拥有3年丰富经验的前端开发工程师，目前就职于万有理论科技（杭州）有限责任公司。
              专注于React技术栈，熟练掌握TypeScript、GraphQL、Tailwind CSS等现代前端技术。
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              在职业生涯中，我主导参与了AFFiNE开源项目的开发，这是一个可自部署的本地优先多人协同知识库。
              负责前端架构设计、国际化实现、admin panel开发等核心功能模块。
            </p>
            <p className="text-gray-400 leading-relaxed">
              我热衷于探索前沿技术，50% vibe coding，对AI应用开发方向保持高度兴趣。
              致力于构建高质量、可复用的组件库，追求优秀的用户体验和产品创新。
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h4 className="text-cyan-400 font-semibold mb-2">工作经历</h4>
              <p className="text-gray-300 text-sm">万有理论科技（杭州）有限责任公司</p>
              <p className="text-gray-400 text-sm">前端开发工程师 | 2022.06 - 2025.06</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h4 className="text-cyan-400 font-semibold mb-2">核心项目</h4>
              <p className="text-gray-300 text-sm">AFFiNE - 开源知识库</p>
              <p className="text-gray-400 text-sm">React + TypeScript + GraphQL</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h4 className="text-cyan-400 font-semibold mb-2">联系方式</h4>
              <p className="text-gray-300 text-sm">📞 13008857268</p>
              <p className="text-gray-300 text-sm">✉️ yangjinfei001@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;