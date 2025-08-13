import NavigationHeader from "../components/navigation-header"
import HeroSection from "../components/hero-section"
import ServicesSection from "../components/services-section"
import AboutUsSection from "../components/about-us-section"
import WhyUsSection from "../components/why-us-section"
import ContactFormSection from "../components/contact-form-section"
import FooterSection from "../components/footer-section"

export default function Page() {
  return (
    <div>
      {/* <NavigationHeader /> */}
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <WhyUsSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  )
}
