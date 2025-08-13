"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
      } else {
        // Handle error - you might want to show an error message
        console.error('Failed to send email:', result.message)
        alert('Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container px-4 md:px-6 lg:px-8 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-green-100 shadow-lg">
                <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              We&apos;ve received your message and will get back to you within 24 hours.
            </p>
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg mb-8">
              <h3 className="font-bold text-gray-900 mb-4 text-lg md:text-xl">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                    1
                  </div>
                  <span className="text-sm md:text-base text-gray-600">We&apos;ll review your information and prepare a custom strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                    2
                  </div>
                  <span className="text-sm md:text-base text-gray-600">Our team will contact you to schedule your free consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                    3
                  </div>
                  <span className="text-sm md:text-base text-gray-600">We&apos;ll present your personalized marketing plan and pricing</span>
                </div>
              </div>
            </div>
            <Button
              onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  company: "",
                  message: "",
                })
              }}
              variant="outline"
              className="px-6 py-3 text-base font-semibold"
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container px-4 md:px-6 lg:px-8 mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 lg:mb-16">
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-800 font-medium shadow-sm">
              Get Started Today
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Request Your Free{" "}
              <span className="text-blue-600">Consultation</span>
            </h2>
                              <p className="max-w-[800px] text-lg md:text-xl text-gray-600 leading-relaxed mx-auto">
                    Tell us about your business and goals. We&apos;ll create a custom digital marketing strategy that fits your
                    budget and drives results.
                  </p>
          </div>
        </div>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card className="border border-gray-100 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold">Get in Touch</CardTitle>
                <CardDescription className="text-base">Ready to start growing your business? We&apos;re here to help.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-blue-100 shadow-sm">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Call us</p>
                      <p className="text-sm text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-blue-100 shadow-sm">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Email us</p>
                      <p className="text-sm text-gray-600">hello@budgetify.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-blue-100 shadow-sm">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Visit us</p>
                      <p className="text-sm text-gray-600">
                        123 Business Ave
                        <br />
                        Suite 100, City, ST 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-lg bg-blue-100 shadow-sm">
                      <Clock className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">Business Hours</p>
                      <p className="text-sm text-gray-600">
                        Mon-Fri: 9AM-6PM EST
                        <br />
                        Sat-Sun: By appointment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-medium mb-3 text-base md:text-lg">Why choose our consultation?</h4>
                  <ul className="space-y-2 text-sm md:text-base text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      100% free, no obligations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      Custom strategy for your business
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      Transparent pricing discussion
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 flex-shrink-0" />
                      No high-pressure sales tactics
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Simplified Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="border border-gray-100 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl font-bold">Let&apos;s Start the Conversation</CardTitle>
                <CardDescription className="text-base">
                  Fill out this quick form and we&apos;ll get back to you with a personalized strategy for your business.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm md:text-base font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                        required
                        className="h-11 md:h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm md:text-base font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                        className="h-11 md:h-12"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm md:text-base font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        className="h-11 md:h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm md:text-base font-medium">Company Name *</Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        value={formData.company}
                        onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                        required
                        className="h-11 md:h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm md:text-base font-medium">How can we help you? *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business goals, current challenges, or what services you're interested in..."
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      rows={4}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Get My Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs md:text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy. We&apos;ll never share your information with
                    third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
