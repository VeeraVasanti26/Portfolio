import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    name: formData.name,
    email: formData.email,
    title: formData.subject,
    message: formData.message
  };

  emailjs
    .send('service_97hzly2', 'template_s32shs7', templateParams, 'Bfyivz8HLMD8xyOAY')
    .then(
      (response) => {
        console.log('Email sent!', response.status, response.text);
        toast.success("✅ Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.error('Email send failed:', error);
        toast.error("❌ Failed to send message.");
      }
    );
};


  // Contact Info & Social Links remain the same...
  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      label: "Email",
      value: "vasantigoli2005@gmail.com",
      href: "mailto:vasantigoli2005@gmail.com"
    },
    {
      icon: <Phone className="text-green-600" size={24} />,
      label: "Phone",
      value: "+91 9951980767",
      href: "tel:+919951980767"
    },
    {
      icon: <MapPin className="text-red-600" size={24} />,
      label: "Location",
      value: "Pamarru, Andhra Pradesh, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-blue-600" size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vasanti-goli-348658259/",
      color: "hover:bg-blue-50"
    },
    {
      icon: <Github className="text-gray-900" size={24} />,
      label: "GitHub",
      href: "https://github.com/VeeraVasanti26?tab=repositories",
      color: "hover:bg-gray-50"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Left Panel */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-50 rounded-lg">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.label}</h4>
                    {info.href ? (
                      <a href={info.href} className="text-gray-600 hover:text-blue-600 transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect with me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 border border-gray-200 rounded-lg transition-all duration-300 ${social.color} transform hover:scale-105`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Open to Opportunities</h4>
              <p className="text-gray-700">I'm actively seeking internship and entry-level opportunities in software development, web development, and AI/ML.</p>
            </div>
          </div>

          {/* Contact Form Right Panel */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about your project, opportunity, or just say hello!"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform shadow-lg flex items-center justify-center space-x-2 ${
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700 hover:scale-105'
                }`}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                ) : (
                  <Send size={20} />
                )}
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
