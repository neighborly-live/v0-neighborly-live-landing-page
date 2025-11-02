export default function Careers() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Careers at Neighborly</h1>
        <p className="text-muted-foreground mb-8">Join us in building the future of trust-based transportation</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Work at Neighborly?</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              At Neighborly, we're not just building an app—we're building communities. We're a team of passionate
              innovators who believe that technology should bring people together, not drive them apart. If you're
              excited about creating meaningful connections and solving real-world problems, we want to hear from you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <div className="space-y-4">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Competitive Compensation</h3>
                <p className="text-foreground/90 leading-relaxed">
                  We offer competitive salaries, equity options, and comprehensive benefits packages including health,
                  dental, and vision insurance.
                </p>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Remote-First Culture</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Work from anywhere in the US. We believe in flexibility and trust our team to do their best work
                  wherever they're most comfortable.
                </p>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Growth & Learning</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Professional development budget, conference attendance, and continuous learning opportunities to help
                  you grow your skills and career.
                </p>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Unlimited PTO, flexible hours, and a culture that respects your time outside of work. We believe
                  happy, balanced team members do their best work.
                </p>
              </div>
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Impact & Purpose</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Your work will directly impact real communities and help create safer, more connected transportation
                  experiences for thousands of people.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
            <p className="text-foreground/90 leading-relaxed mb-6">
              We're growing fast and always looking for talented individuals to join our team. Current openings include:
            </p>

            <div className="space-y-4">
              <div className="border border-border p-6 rounded-lg hover:border-primary transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Senior Full-Stack Engineer</h3>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Engineering</span>
                </div>
                <p className="text-muted-foreground mb-3">Remote • Full-time</p>
                <p className="text-foreground/90 leading-relaxed">
                  Build scalable features for our mobile and web platforms using React Native, Next.js, and Node.js.
                  Help shape our technical architecture and mentor junior engineers.
                </p>
              </div>

              <div className="border border-border p-6 rounded-lg hover:border-primary transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Product Designer</h3>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Design</span>
                </div>
                <p className="text-muted-foreground mb-3">Remote • Full-time</p>
                <p className="text-foreground/90 leading-relaxed">
                  Create intuitive, beautiful experiences for riders and drivers. Own the design process from research
                  to final implementation, working closely with engineering and product teams.
                </p>
              </div>

              <div className="border border-border p-6 rounded-lg hover:border-primary transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Community Operations Manager</h3>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Operations</span>
                </div>
                <p className="text-muted-foreground mb-3">Remote • Full-time</p>
                <p className="text-foreground/90 leading-relaxed">
                  Build and nurture driver communities, manage onboarding processes, and ensure quality experiences
                  across our growing network of tribes.
                </p>
              </div>

              <div className="border border-border p-6 rounded-lg hover:border-primary transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Marketing Manager</h3>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">Marketing</span>
                </div>
                <p className="text-muted-foreground mb-3">Remote • Full-time</p>
                <p className="text-foreground/90 leading-relaxed">
                  Drive growth through creative campaigns, community engagement, and strategic partnerships. Tell the
                  Neighborly story and help us reach new communities.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Interested in joining the Neighborly team? We'd love to hear from you! Send your resume and a brief note
              about why you're excited about Neighborly to:
            </p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-foreground/90 mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:careers@neighborly.live" className="text-primary hover:underline">
                  careers@neighborly.live
                </a>
              </p>
              <p className="text-foreground/90 text-sm mt-4">
                Please include the position title in your email subject line. We review all applications and will
                respond within 2 weeks.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Don't See Your Role?</h2>
            <p className="text-foreground/90 leading-relaxed">
              We're always interested in meeting talented people, even if we don't have an open position that matches
              your skills right now. Send us your information and tell us what you'd love to work on—we'll keep you in
              mind for future opportunities.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
