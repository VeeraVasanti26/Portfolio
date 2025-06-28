import React from 'react';
import { Code, Database, Globe, Brain, Settings, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="text-blue-600" size={32} />,
      title: "Programming Languages",
      skills: ["C", "Python", "Java", "JavaScript"],
      color: "blue"
    },
    {
      icon: <Globe className="text-green-600" size={32} />,
      title: "Web Technologies",
      skills: ["HTML", "CSS", "Bootstrap", "React.js", "Node.js"],
      color: "green"
    },
    {
      icon: <Database className="text-purple-600" size={32} />,
      title: "Databases & Frameworks",
      skills: ["MySQL", "MongoDB", "Java Collections", "Servlet", "JSP"],
      color: "purple"
    },
    {
      icon: <Brain className="text-orange-600" size={32} />,
      title: "Core Subjects",
      skills: ["Data Structures", "Algorithms", "DBMS", "Computer Networks", "OOP"],
      color: "orange"
    },
    {
      icon: <Settings className="text-red-600" size={32} />,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Power BI", "Google Colab", "Figma", "VS Code"],
      color: "red"
    },
    {
      icon: <Users className="text-teal-600" size={32} />,
      title: "Languages",
      skills: ["Telugu", "Hindi", "English", "Tamil", "Kannada"],
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-50 border-blue-200 hover:border-blue-400",
      green: "bg-green-50 border-green-200 hover:border-green-400",
      purple: "bg-purple-50 border-purple-200 hover:border-purple-400",
      orange: "bg-orange-50 border-orange-200 hover:border-orange-400",
      red: "bg-red-50 border-red-200 hover:border-red-400",
      teal: "bg-teal-50 border-teal-200 hover:border-teal-400"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and programming languages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${getColorClasses(category.color)}`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Areas of Interest</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Machine Learning
            </div>
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Web Design & Development
            </div>
            <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              Artificial Intelligence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;