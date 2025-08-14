import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="hero" className="w-full pt-2 pb-4 md:pt-4 md:pb-8 lg:pt-10 lg:pb-12 xl:pt-8 xl:pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px] 2xl:grid-cols-[1fr_600px] items-start">
          
          {/* Left Column - Content */}
          <div className="flex flex-col justify-start space-y-6 lg:space-y-8">
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
            <div className="flex flex-wrap gap-4 lg:gap-6 py-1">
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
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 pt-2">
              <Link href={"#contact"}>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                  Get Free Strategy Call
                  <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
                </Link>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent px-8 py-4 text-lg font-semibold"
              >
                View Our Work
              </Button> */}
            </div>

            {/* Social Proof */}
            <div className="pt-6 lg:pt-1">
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
          <div className="flex items-start justify-center lg:justify-end lg:mt-24 pt-8 lg:pt-0">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/digital-marketing-dashboard.png"
                width="400"
                height="400"
                alt="Digital Marketing Dashboard"
                className="h-auto aspect-square overflow-hidden rounded-2xl object-cover shadow-2xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
