import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools';
}

interface SkillBarProps {
  skill: Skill;
  key?: string;
}

const skills: Skill[] = [
  // 前端核心技术
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'HTML5/CSS3', level: 95, category: 'frontend' },
  { name: 'ES6+', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'shadcn-ui', level: 85, category: 'frontend' },
  { name: 'radix-ui', level: 80, category: 'frontend' },
  
  // 后端与数据
  { name: 'GraphQL', level: 85, category: 'backend' },
  { name: 'Node.js', level: 75, category: 'backend' },
  { name: 'MVC架构', level: 80, category: 'backend' },
  
  // 开发工具
  { name: 'Git', level: 95, category: 'tools' },
  { name: 'Vite', level: 85, category: 'tools' },
  { name: 'Figma', level: 75, category: 'tools' },
  { name: 'Notion', level: 80, category: 'tools' },
  { name: 'AI Coding', level: 85, category: 'tools' },
];

const SkillsSection: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolSkills = skills.filter(skill => skill.category === 'tools');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // 动画配置

  return (
    <section id="skills" className="section-container bg-accent/10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center font-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">技能专长</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 前端技能 */}
          <motion.div
            className="bg-gray-800/30 p-6 rounded-lg border border-gray-700 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">前端开发</h3>
            <motion.div
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>

          {/* 后端技能 */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">后端开发</h3>
            <motion.div
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>

          {/* 工具和其他 */}
          <motion.div
            className="glass-card p-6 md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-cyan-400">工具与方法</h3>
            <motion.div
              className="space-y-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {toolSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SkillBar: React.FC<SkillBarProps> = ({ skill }) => {
  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div variants={itemAnimation}>
      <div className="flex justify-between mb-1">
        <span className="text-text">{skill.name}</span>
        <span className="text-primary">{skill.level}%</span>
      </div>
      <div className="w-full bg-background/50 rounded-full h-2.5">
        <motion.div 
          className="bg-primary h-2.5 rounded-full" 
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default SkillsSection;