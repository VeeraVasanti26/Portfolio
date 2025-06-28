import React from 'react';
import { Briefcase, Award, Users, Calendar } from 'lucide-react';

const Experience = () => {
  const internships = [
    {
      title: "Intelligent Automation Virtual Internship",
      company: "BluePrism",
      duration: "July 2023 – October 2023",
      description: "Gained hands-on experience with RPA tools and automation workflows, improving skills in logic design and business process automation.",
      type: "Virtual Internship",
      skills: ["RPA", "Process Automation", "Logic Design", "Business Processes"]
    }
  ];

  

  const getCategoryColor = (category: string) => {
    const colorMap = {
      "Web Development": "bg-blue-100 text-blue-800",
      "Data Science": "bg-green-100 text-green-800",
      "Programming": "bg-purple-100 text-purple-800",
      "AI/ML": "bg-red-100 text-red-800",
      "Security": "bg-orange-100 text-orange-800",
      "System Administration": "bg-teal-100 text-teal-800"
    };
    return colorMap[category as keyof typeof colorMap] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        </div>

        {/* Internship Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="mr-3 text-blue-600" size={28} />
            Professional Experience
          </h3>
          
          {internships.map((internship, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{internship.title}</h4>
                  <p className="text-lg font-medium text-blue-600 mb-2">{internship.company}</p>
                  <p className="text-gray-600 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {internship.duration}
                  </p>
                </div>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                  {internship.type}
                </span>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{internship.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;