import { Card } from "@/components/ui/card"
import { VideoEmbed } from "@/components/video-embed"
import { BackgroundCheckFlowchart } from "./background-check-flowchart"

const steps = [
  {
    number: "01",
    title: "Driver Gets Verified",
    description: "Drivers complete background checks and receive their unique QR code to share with potential riders.",
    useFlowchart: true,
  },
  {
    number: "02",
    title: "Join a Tribe",
    description: "Scan a driver's QR code to join their tribe. You can be part of multiple tribes for more options.",
    image: "/scanning-qr-code-to-join-driver-tribe.jpg",
    video: "https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/aaf19041-c286-4ec1-8b5b-ab02b0bad942.mp4",
  },
  {
    number: "03",
    title: "Book Your Ride",
    description:
      "Book a ride from a driver tribe that you belong to. As a rider, you have the flexibility to be part of more than one tribe.",
    image: "/booking-ride-with-trusted-driver-from-tribe.jpg",
    video: "https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/5edc3264-b6a9-4604-9b78-1947342eade0.mp4",
  },
  {
    number: "04",
    title: "Ride & Pay",
    description: "Enjoy your ride with a trusted driver. Pay before or after - whatever works for you.",
    image: "/happy-rider-in-car-with-trusted-driver.jpg",
    video: "https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/57959e62-7593-4138-adec-61fe4d96a047.mp4",
    videoRatio: 16 / 9,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">How it works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Getting started with Neighborly is simple. Here's how to join the community.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="text-6xl font-bold text-primary/30 mb-4">{step.number}</div>
                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-xl text-foreground/80 leading-relaxed max-w-xl">{step.description}</p>
              </div>
              <div className="flex-1">
                {step.useFlowchart ? (
                  <BackgroundCheckFlowchart />
                ) : step.video ? (
                  <VideoEmbed src={step.video} poster={step.image} mode="ambient" ratio={step.videoRatio ?? 9 / 16} />
                ) : (
                  <Card className="overflow-hidden">
                    <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-auto" />
                  </Card>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
