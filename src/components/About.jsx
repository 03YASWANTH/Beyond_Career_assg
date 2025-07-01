import { Target, Lightbulb, Heart, Users, Rocket, Award } from 'lucide-react'

const About = () => {
  const values = [
    { icon: Target, title: "Precision", desc: "Laser-focused career strategies", color: "blue" },
    { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge AI-powered solutions", color: "yellow" },
    { icon: Heart, title: "Empathy", desc: "Human-centered approach", color: "red" },
    { icon: Users, title: "Community", desc: "Elite network ecosystem", color: "purple" }
  ]

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <Award className="text-yellow-400" size={20} />
            <span className="text-sm font-medium">IIT Kharagpur Legacy</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            <span className="gradient-text">Revolutionizing</span> Student Success
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Born from the innovation corridors of IIT Kharagpur, we're rewriting the rules of career development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="glass rounded-3xl p-8 lg:p-12 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                <Rocket className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              To democratize access to elite career opportunities through revolutionary technology and 
              human expertise, ensuring every ambitious student can transcend traditional limitations.
            </p>
          </div>
          
          <div className="glass rounded-3xl p-8 lg:p-12 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mr-4">
                <Target className="text-black" size={28} />
              </div>
              <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              A world where talent knows no boundaries - where every student, regardless of background, 
              can access world-class mentorship and opportunities that transform dreams into reality.
            </p>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 lg:p-12 mb-20 card-hover">
          <h3 className="text-4xl font-bold text-center mb-8 gradient-text">The IIT Kharagpur Genesis</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              In the innovation labs of IIT Kharagpur, a group of visionary students identified a critical gap: 
              brilliant minds were being held back by limited access to elite opportunities and personalized guidance.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              What began as late-night brainstorming sessions has evolved into a revolutionary platform that combines 
              cutting-edge AI with human expertise, creating unprecedented pathways to success for students worldwide.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-center mb-12 gradient-text">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${
                  value.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  value.color === 'yellow' ? 'from-yellow-400 to-yellow-500' :
                  value.color === 'red' ? 'from-red-500 to-red-600' :
                  'from-purple-500 to-purple-600'
                } rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About