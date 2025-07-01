import { Brain, Briefcase, Users, Zap, ArrowRight, Sparkles } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Career Intelligence",
      desc: "Revolutionary AI-powered career mapping and personalized growth strategies",
      features: ["Neural career analysis", "Predictive success modeling", "Real-time market insights", "Personalized roadmaps"],
      gradient: "from-blue-500 to-cyan-500",
      delay: "0"
    },
    {
      icon: Briefcase,
      title: "Elite Opportunities",
      desc: "Exclusive access to premium internships and career opportunities",
      features: ["Fortune 500 partnerships", "Startup unicorn access", "Global remote positions", "Executive mentorship"],
      gradient: "from-yellow-400 to-orange-500",
      delay: "200"
    },
    {
      icon: Users,
      title: "Mastermind Network",
      desc: "Connect with industry titans and visionary leaders",
      features: ["C-suite mentorship", "Peer masterminds", "Industry insider access", "Global networking events"],
      gradient: "from-purple-500 to-pink-500",
      delay: "400"
    },
    {
      icon: Zap,
      title: "Success Acceleration",
      desc: "Rapid skill development and career transformation programs",
      features: ["Intensive bootcamps", "1-on-1 coaching", "Performance optimization", "Success tracking"],
      gradient: "from-green-500 to-teal-500",
      delay: "600"
    }
  ]

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <Sparkles className="text-yellow-400" size={20} />
            <span className="text-sm font-medium">Premium Services</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            <span className="gradient-text">Next-Gen</span> Career Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionary services that combine cutting-edge technology with human expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group glass rounded-3xl p-8 lg:p-10 card-hover relative overflow-hidden"
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {service.desc}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.gradient} px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300`}>
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-yellow-500 hover:from-blue-700 hover:via-purple-700 hover:to-yellow-600 px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 pulse-glow">
            Unlock All Services
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services