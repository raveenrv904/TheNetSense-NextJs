/* eslint-disable @next/next/no-img-element */
"use client";
import TitleSection from './TitleSection';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/constants/index.constants';
import Image from 'next/image';

const Projeccts = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  return (
    <section id='projects' className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
      <TitleSection
        title="Projects"
        description="A showcase of our completed projects, delivering impactful digital solutions with excellence."
        />


        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="relative h-48 group overflow-hidden rounded-t-xl">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                >
                    <Image
                    src={project.image}
                    alt={project.category}
                    fill
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    unoptimized
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    
                    {!project.image && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    )}
                </motion.div>

                <span className="absolute top-4 right-4 bg-[#e03a3c] px-3 py-1 rounded-full text-sm font-medium text-white flex items-center gap-1.5 shadow-md">
                    <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" 
                    />
                    </svg>
                    {project.category}
                </span>
                </div>

              <div className="p-6">
                    <div className="grid grid-cols-1 gap-4">
                        {project.techStack.map((stack, index) => (
                        <div key={index} className="space-y-3">
                            {/* Frontend Section */}
                            {stack.frontend && (
                            <div className="group relative pl-7">
                                <span className="absolute left-0 top-0.5 text-[#e03a3c]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                </span>
                                <h4 className="text-sm font-semibold text-[#e03a3c] mb-1">Frontend</h4>
                                <div className="flex flex-wrap gap-2">
                                {stack.frontend.map((tech, i) => (
                                    <span key={i} className="px-2.5 py-1 text-xs bg-gray-100 rounded-full text-gray-700">
                                    {tech}
                                    </span>
                                ))}
                                </div>
                            </div>
                            )}

                            {/* Backend Section */}
                            {stack.backend && (
                            <div className="group relative pl-7">
                                <span className="absolute left-0 top-0.5 text-[#e03a3c]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931.819 6 1.694C17.931 7.819 15.691 9 12 9S6.069 7.819 6 6.694C6.069 5.819 8.309 5 12 5zM6 9.694C6.069 10.819 8.309 12 12 12s5.931-1.181 6-2.306V12c0 2.168-3.663 4-8 4s-8-1.832-8-4V9.694zM6 17.694C6.069 18.819 8.309 20 12 20s5.931-1.181 6-2.306V20c0 2.168-3.663 4-8 4s-8-1.832-8-4v-2.306z"/>
                                </svg>
                                </span>
                                <h4 className="text-sm font-semibold text-[#e03a3c] mb-1">Backend</h4>
                                <div className="flex flex-wrap gap-2">
                                {stack.backend.map((tech, i) => (
                                    <span key={i} className="px-2.5 py-1 text-xs bg-gray-100 rounded-full text-gray-700">
                                    {tech}
                                    </span>
                                ))}
                                </div>
                            </div>
                            )}

                            {/* Database Section */}
                            {stack.database && (
                            <div className="group relative pl-7">
                                <span className="absolute left-0 top-0.5 text-[#e03a3c]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 3C7.03 3 3 7.03 3 12v1h18v-1c0-4.97-4.03-9-9-9zM3 14v2c0 4.97 4.03 9 9 9s9-4.03 9-9v-2H3z"/>
                                </svg>
                                </span>
                                <h4 className="text-sm font-semibold text-[#e03a3c] mb-1">Database</h4>
                                <div className="flex flex-wrap gap-2">
                                {stack.database.map((tech, i) => (
                                    <span key={i} className="px-2.5 py-1 text-xs bg-gray-100 rounded-full text-gray-700">
                                    {tech}
                                    </span>
                                ))}
                                </div>
                            </div>
                            )}

                            {/* Deployment Section */}
                            {stack.deployment && (
                            <div className="group relative pl-7">
                                <span className="absolute left-0 top-0.5 text-[#e03a3c]">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/>
                                </svg>
                                </span>
                                <h4 className="text-sm font-semibold text-[#e03a3c] mb-1">Deployment</h4>
                                <div className="flex flex-wrap gap-2">
                                <span className="px-2.5 py-1 text-xs bg-gray-100 rounded-full text-gray-700">
                                    {stack.deployment}
                                </span>
                                </div>
                            </div>
                            )}
                        </div>
                        ))}
                    </div>

                    <a
                        href={project.webLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 w-full inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-[#e03a3c] hover:bg-[#c53032] transition-all hover:scale-[1.02]"
                    >
                        Visit Website
                        <svg 
                        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                        </svg>
                    </a>
                    </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projeccts;