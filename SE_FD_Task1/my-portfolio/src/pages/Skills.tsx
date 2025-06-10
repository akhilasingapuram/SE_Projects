import React from 'react';
import { Code, Database, Palette, Server } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-8 h-8" />,
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'Backend',
      icon: <Server className="w-8 h-8" />,
      skills: ['Node.js', 'Express','REST APIs']
    },
    {
        title: 'Database',
        icon: <Database className="w-8 h-8" />,
        skills: [ 'MongoDB']
      },

  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          My Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-600">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;