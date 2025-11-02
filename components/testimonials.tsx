import { Card } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Rider",
    content:
      "I feel so much safer knowing exactly who my driver is. Being part of multiple tribes gives me great flexibility!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Driver",
    content:
      "As a driver, I love having control over which rides I accept. The background check process made me feel professional.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Community Member",
    content:
      "Neighborly has transformed how I get around. It's like having friends who drive you places - because they actually are!",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Loved by riders and drivers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what our community members have to say about their Neighborly experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-primary text-primary" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
