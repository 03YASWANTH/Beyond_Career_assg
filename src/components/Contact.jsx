import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Linkedin, Twitter, Instagram, Github, Calendar, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    interest: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! Our team will connect with you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', college: '', interest: '', message: '' })
  }

  const interests = [
    'AI/ML Engineering', 'Product Management', 'Software Engineering', 
    'Data Science', 'Consulting', 'Investment Banking', 'Entrepreneurship', 'Other'
  ]

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <MessageCircle className="text-yellow-400" size={20} />
            <span className="text-sm font-medium">Get Started Today</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            <span className="gradient-text">Transform</span> Your Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to join the elite? Let's craft your extraordinary success story together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass rounded-3xl p-8 lg:p-10">
              <h3 className="text-3xl font-bold mb-8 gradient-text">Connect With Excellence</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Join thousands of ambitious students who've transformed their careers. 
                Your extraordinary journey starts with a single conversation.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", value: "hello@beyondcareer.com", color: "blue" },
                  { icon: Phone, title: "WhatsApp", value: "+91 98765 43210", color: "green" },
                  { icon: MapPin, title: "Headquarters", value: "IIT Kharagpur, West Bengal", color: "yellow" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center group cursor-pointer">
                    <div className={`w-14 h-14 bg-gradient-to-br ${
                      contact.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      contact.color === 'green' ? 'from-green-500 to-green-600' :
                      'from-yellow-400 to-yellow-500'
                    } rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{contact.title}</p>
                      <p className="text-gray-300 group-hover:text-white transition-colors">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Linkedin, color: 'from-blue-600 to-blue-700', name: 'LinkedIn' },
                  { icon: Twitter, color: 'from-blue-400 to-blue-500', name: 'Twitter' },
                  { icon: Instagram, color: 'from-pink-500 to-purple-500', name: 'Instagram' },
                  { icon: Github, color: 'from-gray-700 to-gray-800', name: 'GitHub' }
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                    title={social.name}
                  >
                    <social.icon className="text-white" size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your phone"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-3">College/University</label>
                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Enter your college"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">Career Interest</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                >
                  <option value="">Select your interest</option>
                  {interests.map((interest, index) => (
                    <option key={index} value={interest} className="bg-gray-800">{interest}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-3">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-400"
                  placeholder="Tell us about your career goals and aspirations..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 hover:from-blue-700 hover:via-purple-700 hover:to-yellow-600 font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 pulse-glow"
              >
                Launch My Transformation
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20">
          <div className="glass rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-bold mb-6 gradient-text">Ready to Begin?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the elite community of high-achievers who've transformed their careers with Beyond Career
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <Calendar size={20} />
                Book Free Strategy Call
              </button>
              <button className="glass hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105">
                Download Success Guide
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 border-t border-white/10 pt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Beyond Career. Built with ❤️ by IIT Kharagpur visionaries.</p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact