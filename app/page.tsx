import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ForDriversAndRiders } from "@/components/for-drivers-and-riders"
import { HowItWorks } from "@/components/how-it-works"
import { AppShowcase } from "@/components/app-showcase"
import { VideoGallery } from "@/components/video-gallery"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <ForDriversAndRiders />
      <HowItWorks />
      <AppShowcase />
      <VideoGallery />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
