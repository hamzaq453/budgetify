import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, DollarSign, Clock, Users, Award, Zap, CheckCircle } from "lucide-react"

const advantages = [
  {
    icon: DollarSign,
    title: "Budget-Friendly Pricing",
    description:
      "Get enterprise-level marketing strategies without the enterprise price tag. Our transparent pricing ensures you know exactly what you're paying for.",
    highlight: "Up to 60% less than traditional agencies",
  },
  {
    icon: Clock,
    title: "Fast Implementation",
    description:
      "We don't believe in lengthy onboarding processes. Most campaigns launch within 7-14 days of signing up.",
    highlight: "Average setup time: 10 days",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    description:
      "Every client gets a dedicated account manager who knows your business inside and out. No more explaining your needs to different people.",
    highlight: "1-on-1 personalized service",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "Our strategies have helped over 500 businesses increase their online presence and revenue. We have the case studies to prove it.",
    highlight: "500+ successful campaigns",
  },
  {
    icon: Shield,
    title: "No Long-Term Contracts",
    description:
      "We earn your business every month. Cancel anytime with 30 days notice. We're confident you'll want to stay.",
    highlight: "Month-to-month flexibility",
  },
  {
    icon: Zap,
    title: "Data-Driven Results",
    description:
      "Every decision is backed by data. We provide detailed monthly reports showing exactly how your investment is performing.",
    highlight: "Real-time performance tracking",
  },
]

// const guarantees = [
//   "30-day money-back guarantee",
//   "Transparent monthly reporting",
//   "Direct access to your account manager",
//   "Custom strategy for your industry",
//   "Regular strategy optimization",
// ]

export default function WhyUsSection() {
  return (
    <section id="why-us" className="w-full py-6 md:py-12 lg:py-16 bg-white">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-8 lg:mb-12">
          <div className="space-y-3 lg:space-y-4">
            <div className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm text-green-800 font-medium shadow-sm">
              Why Choose Budgetify
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              The Smart Choice for{" "}
              <span className="text-blue-600">Growing Businesses</span>
            </h2>
            <p className="max-w-[800px] text-lg md:text-xl text-gray-600 leading-relaxed mx-auto">
              We&apos;re not just another marketing agency. Here&apos;s what makes us different and why hundreds of businesses
              trust us with their digital growth.
            </p>
          </div>
        </div>

        {/* Main Advantages Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12 lg:mb-16">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <Card
                key={index}
                className="relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-300 shadow-lg bg-white/90 backdrop-blur-sm group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-lg flex-shrink-0 group-hover:shadow-xl transition-all duration-300">
                      <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base md:text-lg lg:text-xl font-bold mb-2 leading-tight">{advantage.title}</CardTitle>
                      <div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full inline-block border border-green-100">
                        {advantage.highlight}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 text-white mb-12 lg:mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6 lg:mb-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
                Budgetify vs. Traditional Agencies
              </h3>
              <p className="text-gray-300 text-base md:text-lg">See how we stack up against the competition</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-lg md:text-xl font-bold text-red-400 mb-4">Traditional Agencies</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs md:text-sm">High monthly retainers</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs md:text-sm">Long-term contracts (12+ months)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs md:text-sm">Slow implementation (30-60 days)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-xs md:text-sm">Multiple account managers</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg md:text-xl font-bold text-green-400 mb-4">Budgetify</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Affordable pricing</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Month-to-month flexibility</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Fast setup (7-14 days)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm">Dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center">
          <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Ready to Experience the Budgetify Difference?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of businesses that have chosen smart, affordable digital marketing. Get started with a free
              strategy session today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 bg-transparent px-8 py-4 text-lg font-semibold hover:bg-gray-50"
            >
              View Success Stories
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  )
}
