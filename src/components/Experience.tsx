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

  const certifications = [
    {
      title: "Complete Responsive Web Development: 4 Courses in 1",
      issuer: "Udemy",
      date: "July 2024",
      category: "Web Development"
    },
    {
      title: "Introduction to Data Science Using Python",
      issuer: "edX",
      date: "February 2024",
      category: "Data Science"
    },
    {
      title: "Foundations of R Software",
      issuer: "NPTEL",
      date: "November 2024",
      category: "Programming"
    },
    {
      title: "LeetCode: 50-Day, 100-Day Challenge",
      issuer: "LeetCode",
      date: "2024",
      category: "Programming"
    },
    {
      title: "Generative AI",
      issuer: "L4G",
      date: "November 2024",
      category: "AI/ML"
    },
    {
      title: "Programming Essentials in Python",
      issuer: "Cisco Networking Academy",
      date: "May 2023",
      category: "Programming"
    },
    {
      title: "Cybersecurity and Privacy",
      issuer: "NPTEL",
      date: "October 2023",
      category: "Security"
    },
    {
      title: "NDG Linux Essentials",
      issuer: "Cisco Networking Academy",
      date: "December 2023",
      category: "System Administration"
    }
  ];

  const leadership = [
    {
      role: "AI-Hackathon Volunteer",
      organization: "College Event",
      year: "2025",
      description: "Led web design competition for 450+ participants; mentored juniors."
    },
    {
      role: "National Service Scheme (NSS) Volunteer",
      organization: "VRSEC",
      year: "2022-present",
      description: "Organized and participated in 10+ social impact events."
    },
    {
      role: "Little Hands Organization Volunteer",
      organization: "Community Service",
      year: "2023-present",
      description: "Contributed to welfare activities for underprivileged communities."
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
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience & Leadership</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional experience, certifications, and community involvement
          </p>
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

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Users className="mr-3 text-purple-600" size={28} />
            Leadership & Community Service
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((position, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{position.role}</h4>
                  <p className="text-purple-600 font-medium mb-1">{position.organization}</p>
                  <p className="text-gray-500 text-sm">{position.year}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{position.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="mr-3 text-green-600" size={28} />
            Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${getCategoryColor(cert.category)}`}>
                    {cert.category}
                  </span>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{cert.title}</h4>
                  <p className="text-green-600 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;