import React from 'react';
import { GraduationCap, Calendar, Award, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Velagapudi Ramakrishna Siddhartha Engineering College, Vijayawada",
      duration: "Oct 2022 - May 2026*",
      cgpa: "9.28",
      status: "Pursuing",
      color: "blue"
    },
    {
      degree: "Intermediate",
      institution: "Sri Srinivasa Junior College",
      duration: "Jun 2020 - April 2022",
      cgpa: "9.67",
      status: "Completed",
      color: "green"
    },
    {
      degree: "High School",
      institution: "Sri Srinivasa E.M High School",
      duration: "2020",
      cgpa: "9.61",
      status: "Completed",
      color: "purple"
    }
  ];

  const achievements = [
    "2nd prize in FEMTECH organized by Velagapudi Ramakrishna Siddhartha Engineering College",
    "Won prize for rank 1 in academics in SSC",
    "Won prize for rank 2 in academics in Intermediate",
    "Received Scholarship provided by North South Foundation",
    "Secured 5291 rank in AP EAMCET examination out of 2,82,496 students, 2022"
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "border-l-blue-500 bg-blue-50",
      green: "border-l-green-500 bg-green-50",
      purple: "border-l-purple-500 bg-purple-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Academic journey marked by consistent excellence and dedication
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" size={28} />
              Academic Timeline
            </h3>
            
            <div className="space-y-6">
              {educationData.map((education, index) => (
                <div 
                  key={index}
                  className={`border-l-4 pl-6 pb-6 ${getColorClasses(education.color)} rounded-r-lg p-4`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {education.degree}
                      </h4>
                      <p className="text-gray-700 font-medium mb-2 flex items-center">
                        <MapPin size={16} className="mr-2 text-gray-500" />
                        {education.institution}
                      </p>
                      <p className="text-gray-600 flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-500" />
                        {education.duration}
                      </p>
                    </div>
                    
                    <div className="mt-3 sm:mt-0 sm:ml-4 text-right">
                      <div className="bg-white rounded-lg px-3 py-2 shadow-sm border">
                        <p className="text-xs text-gray-500 uppercase font-medium">CGPA</p>
                        <p className="text-xl font-bold text-gray-900">{education.cgpa}</p>
                      </div>
                      <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                        education.status === 'Pursuing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {education.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="mr-3 text-purple-600" size={28} />
              Achievements
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border-l-4 border-yellow-400 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full mr-3 flex-shrink-0">
                      <Award size={16} className="text-yellow-600" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;