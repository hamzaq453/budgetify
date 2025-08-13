"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Menu, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Search Engine Optimization",
    href: "/services/seo",
    description: "Boost your organic visibility and drive qualified traffic",
    price: "Starting at $299/mo",
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media",
    description: "Build brand awareness across all major platforms",
    price: "Starting at $199/mo",
  },
  {
    title: "Email Marketing",
    href: "/services/email-marketing",
    description: "Nurture leads with personalized email campaigns",
    price: "Starting at $149/mo",
  },
  {
    title: "Content Marketing",
    href: "/services/content-marketing",
    description: "Create compelling content that drives action",
    price: "Starting at $249/mo",
  },
  {
    title: "Pay-Per-Click Advertising",
    href: "/services/ppc",
    description: "Maximize ROI with targeted PPC campaigns",
    price: "Starting at $399/mo",
  },
  {
    title: "Website Development",
    href: "/services/web-development",
    description: "Build fast, conversion-optimized websites",
    price: "Starting at $999",
  },
]

const resources = [
  {
    title: "Free Marketing Audit",
    href: "/audit",
    description: "Get a comprehensive analysis of your current marketing",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    description: "See how we've helped businesses like yours succeed",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest insights and tips from our marketing experts",
  },
  {
    title: "Marketing Calculator",
    href: "/calculator",
    description: "Calculate your potential ROI and marketing budget",
  },
]

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export default function NavigationHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200" : "bg-white border-gray-100",
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Budgetify</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[800px] grid-cols-2">
                      <div className="row-span-3">
                        <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-600 p-6 text-white">
                          <div className="mb-2 mt-4 text-lg font-medium">Complete Digital Marketing Solutions</div>
                          <p className="text-sm leading-tight text-blue-100">
                            From SEO to social media, we offer comprehensive services designed to grow your business.
                          </p>
                          <Button className="mt-4 bg-white text-blue-600 hover:bg-gray-100" size="sm">
                            View All Services
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        {services.map((service) => (
                          <NavigationMenuLink key={service.title} asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-blue-600 focus:bg-gray-50 focus:text-blue-600"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-xs leading-snug text-gray-600">{service.description}</p>
                              <p className="text-xs font-medium text-blue-600">{service.price}</p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[500px] grid-cols-1">
                      {resources.map((resource) => (
                        <NavigationMenuLink key={resource.title} asChild>
                          <Link
                            href={resource.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 hover:text-blue-600 focus:bg-gray-50 focus:text-blue-600"
                          >
                            <div className="text-sm font-medium leading-none">{resource.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-gray-600">{resource.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Regular Navigation Items */}
                {mainNavigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 rounded-md transition-colors"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-blue-600">
              <Phone className="mr-2 h-4 w-4" />
              (555) 123-4567
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-4 border-b">
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">B</span>
                      </div>
                      <span className="text-xl font-bold text-gray-900">Budgetify</span>
                    </Link>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-6">
                    <div className="space-y-6">
                      {/* Main Navigation */}
                      <div className="space-y-3">
                        {mainNavigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* Services Section */}
                      <div>
                        <h3 className="px-3 text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                          Services
                        </h3>
                        <div className="space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="font-medium">{service.title}</div>
                              <div className="text-xs text-blue-600">{service.price}</div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Resources Section */}
                      <div>
                        <h3 className="px-3 text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                          Resources
                        </h3>
                        <div className="space-y-1">
                          {resources.map((resource) => (
                            <Link
                              key={resource.title}
                              href={resource.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {resource.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </nav>

                  {/* Mobile CTA */}
                  <div className="border-t pt-6 space-y-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setIsMobileMenuOpen(false)}>
                      Free Consultation
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call (555) 123-4567
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Top Bar (Optional - can be enabled for promotions) */}
      {/* <div className="bg-blue-600 text-white text-center py-2 text-sm">
        <div className="container px-4 md:px-6">
          🎉 Limited Time: Get 50% off your first month! 
          <Link href="/contact" className="underline ml-2 hover:no-underline">
            Claim Offer
          </Link>
        </div>
      </div> */}
    </header>
  )
}
