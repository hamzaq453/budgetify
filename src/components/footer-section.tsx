import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/budgetify", color: "hover:text-blue-400" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/budgetify", color: "hover:text-blue-400" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/budgetifymarketingagency/", color: "hover:text-pink-400" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/budgetify", color: "hover:text-blue-400" },
]

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container px-4 md:px-6 lg:px-8 py-8 md:py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl md:text-2xl font-bold">Budgetify</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md text-sm md:text-base leading-relaxed">
              Empowering small and medium businesses to compete online with affordable, results-driven digital marketing
              strategies that deliver real ROI.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>+92 3221 173487</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm md:text-base">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span>budgetifymarketingagency@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                82 J1 Johar Town
                        <br />
                        Lahore, Pakistan <br />
                  
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-3 text-sm md:text-base">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className={`w-9 h-9 md:w-10 md:h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-gray-700`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <IconComponent className="h-4 w-4 md:h-5 md:w-5" />
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Why Us?
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-300 hover:text-white transition-colors text-sm md:text-base">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <span>🔒</span>
              <span>SSL Secured</span>
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              <span>⭐</span>
              <span>4.9/5 Rating</span>
            </span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              <span>🏆</span>
              <span>500+ Happy Clients</span>
            </span>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container px-4 md:px-6 lg:px-8 py-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2024 Budgetify. All rights reserved.
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              Empowering businesses to thrive online.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
