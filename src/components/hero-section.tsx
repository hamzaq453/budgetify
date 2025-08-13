import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-2 pb-4 md:pt-4 md:pb-8 lg:pt-6 lg:pb-12 xl:pt-8 xl:pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] 2xl:grid-cols-[1fr_600px] items-center">
          
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <div className="space-y-4 lg:space-y-6">
              {/* Badge */}
              <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-800 font-medium shadow-sm">
                Digital Marketing Made Affordable
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                Grow Your Business with{" "}
                <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                  Budgetify
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="max-w-[600px] text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Transform your digital presence without breaking the bank. We deliver high-impact marketing strategies
                tailored to your budget, helping small and medium businesses compete with industry giants.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="flex flex-wrap gap-4 lg:gap-6 py-4">
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-white/50 px-3 py-2 rounded-lg">
                <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-green-600 flex-shrink-0" />
                <span>ROI-Focused Campaigns</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-white/50 px-3 py-2 rounded-lg">
                <Users className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
                <span>Expert Team</span>
              </div>
              <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-white/50 px-3 py-2 rounded-lg">
                <Zap className="h-4 w-4 md:h-5 md:w-5 text-yellow-600 flex-shrink-0" />
                <span>Fast Results</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent px-8 py-4 text-lg font-semibold"
              >
                View Our Work
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-6 lg:pt-8">
              <p className="text-sm md:text-base text-gray-500 mb-3">Trusted by 500+ businesses</p>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white text-xs md:text-sm">★</span>
                  </div>
                ))}
                <span className="ml-3 text-sm md:text-base text-gray-600 font-medium">4.9/5 from 200+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/digital-marketing-dashboard.png"
                width="600"
                height="600"
                alt="Digital Marketing Dashboard"
                className="w-full h-auto aspect-square overflow-hidden rounded-2xl object-cover shadow-2xl border border-gray-200"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-white rounded-xl shadow-xl p-4 md:p-5 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">+127%</div>
                    <div className="text-xs md:text-sm text-gray-600">ROI</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-xl shadow-xl p-4 md:p-5 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-lg md:text-xl font-bold text-gray-900">2.3M</div>
                    <div className="text-xs md:text-sm text-gray-600">Reach</div>
                  </div>
                </div>
              </div>
              
              {/* Additional floating element */}
              <div className="absolute top-1/2 -right-8 md:-right-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 md:p-4 shadow-xl transform hover:scale-110 transition-transform duration-300">
                <div className="text-white text-sm md:text-base font-bold">🚀</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
