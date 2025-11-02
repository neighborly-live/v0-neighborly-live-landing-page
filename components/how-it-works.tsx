import { Card } from "@/components/ui/card"

const steps = [
  {
    number: "01",
    title: "Driver Gets Verified",
    description: "Drivers complete background checks and receive their unique QR code to share with potential riders.",
    image: "/driver-verification-and-background-check-process.jpg",
  },
  {
    number: "02",
    title: "Join a Tribe",
    description: "Scan a driver's QR code to join their tribe. You can be part of multiple tribes for more options.",
    image: "/scanning-qr-code-to-join-driver-tribe.jpg",
  },
  {
    number: "03",
    title: "Book Your Ride",
    description:
      "Schedule a ride and select from drivers in your tribes. They'll receive a notification to accept or decline.",
    image: "/booking-ride-with-trusted-driver-from-tribe.jpg",
  },
  {
    number: "04",
    title: "Ride & Pay",
    description: "Enjoy your ride with a trusted driver. Pay before or after - whatever works for you.",
    image: "/happy-rider-in-car-with-trusted-driver.jpg",
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
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              <div className="flex-1">
                <Card className="overflow-hidden">
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-auto" />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
