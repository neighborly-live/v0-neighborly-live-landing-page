import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
            Ride with people you <span className="text-primary">trust</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Connect with verified drivers in your community. Safe, flexible ride-sharing built on relationships, not
            algorithms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
              Download on App Store
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              Get it on Google Play
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
            <img
              src="/mobile-app-interface-showing-ride-sharing-with-com.jpg"
              alt="Neighborly App Interface"
              className="rounded-2xl shadow-2xl mx-auto max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
