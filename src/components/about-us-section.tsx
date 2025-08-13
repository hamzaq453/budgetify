import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Clock, Award, Star, Target } from "lucide-react"
import Image from "next/image"

const stats = [
  { 
    number: "50+", 
    label: "Happy Clients", 
    icon: Users,
    description: "Satisfied businesses we've helped grow",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100"
  },
  { 
    number: "5+", 
    label: "Years Experience", 
    icon: Award,
    description: "Industry expertise and proven track record",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-100"
  },
  { 
    number: "127%", 
    label: "Average ROI", 
    icon: TrendingUp,
    description: "Measurable results for our clients",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-100"
  },
  { 
    number: "24/7", 
    label: "Support Available", 
    icon: Clock,
    description: "Round-the-clock assistance when you need it",
    bgColor: "bg-gradient-to-br from-orange-50 to-amber-100"
  },
]

export default function AboutUsSection() {
  return (
    <section id="about" className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16">
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-800 font-medium shadow-sm">
              About Budgetify
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Empowering Businesses to{" "}
              <span className="text-blue-600">Thrive Online</span>
            </h2>
            <p className="max-w-[800px] text-lg md:text-xl text-gray-600 leading-relaxed mx-auto">
              Founded on the belief that every business deserves access to world-class digital marketing, 
              regardless of budget size.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-2 items-center mb-16 lg:mb-20">
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Our Story
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Budgetify was born from a simple observation: small and medium businesses were being priced out of
                  effective digital marketing. Traditional agencies demanded hefty retainers, leaving many businesses 
                  struggling to compete online.
                </p>
                <p>
                  We set out to change that. Our team of experienced marketers, designers, and strategists came together
                  with one mission: to democratize digital marketing by making it accessible, affordable, and
                  results-driven for businesses of all sizes.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                To level the playing field by providing budget-conscious businesses with the same high-quality digital
                marketing strategies that enterprise companies use, but at a fraction of the cost.
              </p>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative">
              <Image
                src="/team-collaboration.png"
                width="600"
                height="500"
                alt="Budgetify team collaborating"
                className="rounded-2xl object-cover shadow-2xl border border-gray-200"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-xl p-4 md:p-6 border border-blue-100">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redesigned Stats Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Our Impact in Numbers
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from real partnerships that speak for themselves
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card key={index} className={`relative overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm group ${stat.bgColor}`}>
                  <CardContent className="p-6 md:p-8 text-center">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    
                    {/* Icon */}
                    <div className="relative flex justify-center mb-6">
                      <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-white/80 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <IconComponent className="h-8 w-8 md:h-10 md:w-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
                      </div>
                    </div>
                    
                    {/* Number */}
                    <div className="relative mb-3">
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {stat.number}
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="relative mb-4">
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                        {stat.label}
                      </h4>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 shadow-xl border border-blue-100">
            <div className="text-center mb-8">
              <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Trusted by Businesses Worldwide
              </h4>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their digital presence with Budgetify
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700">4.9/5 Rating</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
                <Target className="h-5 w-5 text-green-500" />
                <span className="text-sm md:text-base font-medium text-gray-700">Results Guaranteed</span>
              </div>
              
              <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm">
                <Clock className="h-5 w-5 text-blue-500" />
                <span className="text-sm md:text-base font-medium text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
