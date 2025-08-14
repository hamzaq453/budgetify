import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Facebook, Mail, PenTool, BarChart3, Smartphone, ArrowRight, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Boost your organic visibility and drive qualified traffic to your website with our data-driven SEO strategies.",
    features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Local SEO"],
    popular: false,
  },
  {
    icon: Facebook,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage your audience across all major social media platforms.",
    features: ["Content Creation", "Community Management", "Paid Social Ads", "Analytics & Reporting"],
    popular: true,
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns that convert.",
    features: ["Campaign Design", "List Management", "Automation Setup", "A/B Testing"],
    popular: false,
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    description: "Create compelling content that tells your brand story and drives customer action.",
    features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy"],
    popular: false,
  },
  {
    icon: BarChart3,
    title: "Pay-Per-Click Advertising",
    description: "Maximize your ad spend with targeted PPC campaigns across Google, Bing, and social platforms.",
    features: ["Campaign Setup", "Keyword Bidding", "Ad Copy Creation", "Conversion Tracking"],
    popular: false,
  },
  {
    icon: Smartphone,
    title: "Website Development",
    description: "Build fast, responsive websites optimized for conversions and search engines.",
    features: ["Responsive Design", "SEO Optimization", "Speed Optimization", "CMS Integration"],
    popular: false,
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-6 md:py-12 lg:py-16 bg-white">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-8 lg:mb-12">
          <div className="space-y-3 lg:space-y-4">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-800 font-medium shadow-sm">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Complete Digital Marketing{" "}
              <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="max-w-[800px] text-lg md:text-xl text-gray-600 leading-relaxed mx-auto">
              From SEO to social media, we offer comprehensive digital marketing services designed to fit your budget
              and grow your business.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-300 ${
                  service.popular 
                    ? "ring-2 ring-blue-500 shadow-lg bg-gradient-to-br from-blue-50 to-white" 
                    : "hover:ring-2 hover:ring-blue-200"
                }`}
              >
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 text-sm font-semibold rounded-bl-xl">
                    Most Popular
                  </div>
                )}
                <CardHeader className="pb-2">
                  <div className="flex items-start gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-lg ${
                      service.popular 
                        ? "bg-gradient-to-r from-blue-600 to-purple-600" 
                        : "bg-blue-100"
                    }`}>
                      <IconComponent className={`h-6 w-6 ${
                        service.popular ? "text-white" : "text-blue-600"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg lg:text-xl font-bold text-gray-900 leading-tight">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-gray-600 text-sm leading-relaxed -mt-2">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wide">
                      What&apos;s included:
                    </h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>


                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        {/* <div className="flex flex-col items-center justify-center space-y-6 text-center pt-12 lg:pt-16">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Need a Custom Solution?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-[700px] mx-auto leading-relaxed">
              Every business is unique. Let's discuss how we can create a tailored digital marketing strategy that fits
              your specific needs and budget.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Schedule Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-gray-300 bg-transparent px-8 py-4 text-lg font-semibold hover:bg-gray-50"
            >
              View Case Studies
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  )
}
