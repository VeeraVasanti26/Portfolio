import React from 'react';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI Chatbot for SAHE University",
      type: "Mini Project",
      year: "2025–Present",
      description: "Developed an AI-driven university enquiry chatbot using NLP, integrating Dialogflow and BERT for intent recognition with a hybrid retrieval-generation architecture.",
      techStack: ["Python", "NLP", "Dialogflow", "BERT"],
      category: "AI/ML",
      status: "In Progress"
    },
    {
      title: "Portfolio Website",
      type: "Independent Project",
      year: "2025",
      description: "Built a responsive, interactive portfolio website to showcase personal projects and skills using modern web technologies.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      githubUrl: "https://github.com/vasanti-goli/portfolio",
      liveUrl: "#",
      category: "Web Development",
      status: "Completed"
    },
    {
      title: "English-to-Sanskrit Translation",
      type: "EPICS Project",
      year: "2024",
      description: "Implemented a character-level Seq2Seq model with LSTM and Transformer support for English-to-Sanskrit translation using dynamic encoder-decoder architecture.",
      techStack: ["Python", "LSTM", "Transformers", "NLP"],
      githubUrl: "https://github.com/vasanti-goli/english-sanskrit-translation",
      category: "AI/ML",
      status: "Completed"
    },
    {
      title: "Tic Tac Toe Game",
      type: "Independent Project",
      year: "2024",
      description: "Developed a classic Tic Tac Toe game with interactive UI and win-condition logic using React.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      githubUrl: "https://github.com/vasanti-goli/tic-tac-toe",
      liveUrl: "https://vasanti-goli.github.io/tic-tac-toe",
      category: "Web Development",
      status: "Completed"
    },
    {
      title: "Music Player",
      type: "Independent Project",
      year: "2024",
      description: "Created a responsive music player inspired by Spotify with custom audio controls and playlist functionality.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/vasanti-goli/music-player",
      liveUrl: "https://vasanti-goli.github.io/music-player",
      category: "Web Development",
      status: "Completed"
    },
    {
      title: "To-Do List App",
      type: "Independent Project",
      year: "2024",
      description: "Built a task management app with interactive features to add, update, and remove tasks dynamically.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      githubUrl: "https://github.com/vasanti-goli/todo-list",
      liveUrl: "https://vasanti-goli.github.io/todo-list",
      category: "Web Development",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    return status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800";
  };

  const getCategoryColor = (category: string) => {
    return category === "AI/ML" ? "bg-purple-100 text-purple-800" : "bg-teal-100 text-teal-800";
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of innovative solutions and technical implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    {project.year}
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-1 font-medium">
                  {project.type}
                </p>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <Code size={16} className="text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-700">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;