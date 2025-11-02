import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 sm:p-16 text-center text-primary-foreground">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Ready to ride with your community?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-primary-foreground/90 text-pretty">
            Join thousands of riders and drivers building safer, more connected communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Download on App Store
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto">
              Get it on Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
