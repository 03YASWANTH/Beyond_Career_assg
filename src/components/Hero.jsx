import { ArrowRight, Play, Zap, TrendingUp, Users } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl floating-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <Zap className="text-yellow-400" size={20} />
            <span className="text-sm font-medium">Powered by IIT Kharagpur Innovation</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="block">Redefine Your</span>
            <span className="gradient-text">Career Journey</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionary AI-powered platform connecting ambitious students with elite opportunities. 
            Transform your potential into unprecedented success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 pulse-glow"
            >
              Launch Your Future
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            
            <button className="group glass hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                <Play className="text-black ml-1" size={20} />
              </div>
              Watch Success Stories
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, number: '2,500+', label: 'Students Transformed', color: 'blue' },
              { icon: TrendingUp, number: '94%', label: 'Success Rate', color: 'yellow' },
              { icon: Zap, number: '150+', label: 'Elite Partners', color: 'purple' }
            ].map((stat, index) => (
              <div key={index} className="glass rounded-2xl p-6 card-hover">
                <div className={`w-16 h-16 bg-gradient-to-br ${
                  stat.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  stat.color === 'yellow' ? 'from-yellow-400 to-yellow-500' :
                  'from-purple-500 to-purple-600'
                } rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-pulse">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero