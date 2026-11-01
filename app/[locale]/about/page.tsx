export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Neighborly</h1>
        <p className="text-muted-foreground mb-8">Building trust-based communities, one ride at a time</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              At Neighborly, we believe that transportation should be built on trust, not transactions. We're
              reimagining ride-sharing by creating community-based "tribes" where riders and drivers know and trust each
              other, making every journey safer, more personal, and more connected.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Our platform empowers drivers to build their own trusted networks through background-verified profiles and
              QR code invitations, while giving riders the peace of mind that comes from riding with people they know
              and trust.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Neighborly was founded in 2024 with a simple observation: traditional ride-sharing had lost the human
              connection. Riders and drivers were strangers, and every trip felt transactional. We asked ourselves,
              "What if ride-sharing could feel more like carpooling with a neighbor?"
            </p>
            <p className="text-foreground/90 leading-relaxed mb-4">
              From this question, the concept of "tribes" was born. By allowing drivers to create their own verified
              networks and riders to join multiple trusted communities, we've created a platform where safety and
              familiarity go hand in hand.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Today, Neighborly is growing across communities nationwide, connecting thousands of riders and drivers who
              value trust, flexibility, and genuine human connection in their daily commutes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Trust First</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Every driver undergoes comprehensive background checks, and every tribe is built on verified
                  connections. Trust isn't just a feature—it's our foundation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We believe in the power of local communities. Our tribe system puts control in the hands of drivers
                  and riders, creating networks that reflect real relationships.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Safety Always</h3>
                <p className="text-foreground/90 leading-relaxed">
                  From background checks to real-time tracking and emergency support, we've built multiple layers of
                  safety into every aspect of the Neighborly experience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Flexibility & Choice</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Riders can join multiple tribes and choose their preferred driver. Drivers can accept or decline rides
                  based on their availability. Everyone has control over their experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Neighborly is built by a diverse team of technologists, community organizers, and transportation
              innovators who share a passion for creating safer, more connected communities.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              We're headquartered in Austin, Texas, but our team works remotely across the country, staying connected to
              the communities we serve. We're always looking for talented individuals who share our vision—check out our
              careers page to join us!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Have questions about Neighborly? We'd love to hear from you.
            </p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p className="text-foreground/90">
                <strong>Email:</strong> support@neighborly.live
              </p>
              <p className="text-foreground/90">
                <strong>Phone:</strong> (281) 849-3110
              </p>
              <p className="text-foreground/90">
                <strong>Address:</strong> 12166 Metric Blvd, Austin, TX 78613, USA
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
