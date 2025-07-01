import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote, Award, TrendingUp } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      name: "Arjun Mehta",
      role: "Senior SDE at Google",
      company: "Google",
      college: "IIT Delhi",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Beyond Career's AI-powered guidance transformed my trajectory completely. From a confused engineering student to landing my dream role at Google - the personalized mentorship was game-changing.",
      rating: 5,
      achievement: "₹45L+ Package at Google",
      growth: "+300% salary increase",
      timeline: "6 months"
    },
    {
      name: "Priya Sharma",
      role: "Product Manager at Microsoft",
      company: "Microsoft",
      college: "BITS Pilani",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The elite network access through Beyond Career opened doors I never knew existed. Connected directly with Microsoft's VP who became my mentor. Absolutely revolutionary platform.",
      rating: 5,
      achievement: "PM role at Microsoft",
      growth: "Direct VP mentorship",
      timeline: "4 months"
    },
    {
      name: "Rahul Verma",
      role: "Founder & CEO",
      company: "TechNova (YC S23)",
      college: "IIT Bombay",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "Beyond Career didn't just help me find opportunities - they helped me create them. The entrepreneurship track and investor connections led to my Y Combinator acceptance.",
      rating: 5,
      achievement: "Y Combinator acceptance",
      growth: "$2M seed funding",
      timeline: "8 months"
    },
    {
      name: "Ananya Patel",
      role: "Quant Researcher at Jane Street",
      company: "Jane Street",
      college: "IIT Kharagpur",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The quantitative finance track was incredibly sophisticated. Real trading strategies, direct mentorship from Jane Street alumni, and interview prep that actually worked.",
      rating: 5,
      achievement: "Jane Street Quant role",
      growth: "₹80L+ compensation",
      timeline: "5 months"
    },
    {
      name: "Vikram Singh",
      role: "ML Engineer at OpenAI",
      company: "OpenAI",
      college: "IIT Madras",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The AI/ML specialization track was phenomenal. Working on real projects, contributing to open source, and getting mentored by OpenAI researchers - unparalleled experience.",
      rating: 5,
      achievement: "OpenAI ML Engineer",
      growth: "Top 1% AI talent",
      timeline: "7 months"
    },
    {
      name: "Sneha Reddy",
      role: "Investment Banking at Goldman Sachs",
      company: "Goldman Sachs",
      college: "IIM Ahmedabad",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The finance track's intensity matched Goldman's standards perfectly. Case studies, financial modeling, and direct access to MD-level mentors made the difference.",
      rating: 5,
      achievement: "Goldman Sachs IB",
      growth: "₹60L+ package",
      timeline: "6 months"
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextTestimonial, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push({ ...testimonials[index], displayIndex: i })
    }
    return visible
  }

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-8">
            <Award className="text-yellow-400" size={20} />
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">
            <span className="gradient-text">Extraordinary</span> Transformations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real stories of students who shattered limitations and achieved the impossible
          </p>
        </div>

        <div 
          className="relative mb-16"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div 
                key={`${testimonial.name}-${currentIndex}-${index}`}
                className={`glass rounded-3xl p-8 card-hover transition-all duration-700 ${
                  index === 1 ? 'lg:scale-105 lg:z-10' : 'lg:scale-95'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-2xl object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                      <Award className="text-white" size={16} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-blue-400 font-semibold">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.college}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={18} />
                  ))}
                </div>
                
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 text-blue-400/30" size={24} />
                  <p className="text-gray-300 leading-relaxed pl-6 text-sm lg:text-base">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-xl p-3 border border-green-500/30">
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold text-sm">Achievement</span>
                      <TrendingUp className="text-green-400" size={16} />
                    </div>
                    <p className="text-white font-bold text-sm">{testimonial.achievement}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-blue-500/20 rounded-lg p-2 border border-blue-500/30">
                      <p className="text-blue-400 text-xs font-medium">Growth</p>
                      <p className="text-white font-semibold text-xs">{testimonial.growth}</p>
                    </div>
                    <div className="bg-yellow-500/20 rounded-lg p-2 border border-yellow-500/30">
                      <p className="text-yellow-400 text-xs font-medium">Timeline</p>
                      <p className="text-white font-semibold text-xs">{testimonial.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-6 mt-12">
            <button 
              onClick={prevTestimonial}
              className="glass hover:bg-white/10 p-4 rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-gradient-to-r from-blue-500 to-yellow-400 w-8' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="glass hover:bg-white/10 p-4 rounded-2xl transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { number: "98.7%", label: "Success Rate", icon: TrendingUp },
            { number: "4.9/5", label: "Satisfaction", icon: Star },
            { number: "2,500+", label: "Transformations", icon: Award },
            { number: "₹50L+", label: "Avg Package", icon: TrendingUp }
          ].map((stat, index) => (
            <div key={index} className="glass rounded-2xl p-6 text-center card-hover">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={20} />
              </div>
              <div className="text-2xl lg:text-3xl font-black gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials