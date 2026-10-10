import { Button } from "@/components/ui/button"
import { VideoEmbed } from "@/components/video-embed"

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
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
              asChild
            >
              <a href="https://apps.apple.com/app/neighborly/id6749149630" target="_blank" rel="noopener noreferrer">
                Download on App Store
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
              <a
                href="https://play.google.com/store/apps/details?id=com.neighborly.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get it on Google Play
              </a>
            </Button>
          </div>

          <div className="relative max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none rounded-3xl" />
            <VideoEmbed
              src="https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/2bf869f2-9e76-451e-9d47-43ee20b2a91d.mp4"
              mode="ambient"
              preload="auto"
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
