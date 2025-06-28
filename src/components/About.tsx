import React from 'react';
import { User, Target, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <User className="text-blue-600" size={24} />,
      title: "Student Excellence",
      description: "B.Tech CSE student with 9.28 CGPA at VRSEC, Vijayawada"
    },
    {
      icon: <Target className="text-purple-600" size={24} />,
      title: "Technical Focus",
      description: "Specialized in Web Development, AI/ML, and Full Stack Technologies"
    },
    {
      icon: <Heart className="text-teal-600" size={24} />,
      title: "Community Impact",
      description: "Active volunteer in NSS and social welfare activities"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated Computer Science Engineering student with a passion for creating innovative 
              solutions through technology. My journey spans across web development, artificial intelligence, 
              and software engineering, always driven by curiosity and a desire to make a positive impact.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              With experience in multiple programming languages and frameworks, I enjoy tackling complex 
              challenges and collaborating with teams to deliver exceptional results. My goal is to 
              contribute meaningfully to the tech industry while continuously learning and growing.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Problem Solving
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                Team Leadership
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
                Adaptability
              </span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                Communication
              </span>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;