import { Button } from '@/components/ui/button'
import { VideoEmbed } from '@/components/video-embed'

export function ForDriversAndRiders() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Built for drivers. Built for riders.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Neighborly works differently depending on which side of the ride you're on.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center text-center">
            <VideoEmbed
              src="https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/784af6d8-7160-4d39-acf3-79855a5b5b6c.mp4"
              poster="/driver-recognizes-returning-passenger-at-curb.jpg"
              mode="narrative"
              className="max-w-sm w-full mb-6"
            />
            <h3 className="text-2xl font-bold mb-3">For Drivers</h3>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-md mb-6">
              Turn the riders you already trust into your own Tribe. Share your QR code, accept rides when you're
              available, and build a schedule around relationships — not algorithms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="https://apps.apple.com/app/neighborly/id6749149630" target="_blank" rel="noopener noreferrer">
                  Become a Driver
                </a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <VideoEmbed
              src="https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/70ecc85f-33bb-4c4e-b4bc-81432ae2f86f.mp4"
              poster="/rider-smiling-recognizing-familiar-driver.jpg"
              mode="narrative"
              className="max-w-sm w-full mb-6"
            />
            <h3 className="text-2xl font-bold mb-3">For Riders</h3>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-md mb-6">
              Stop wondering who's picking you up. Join a driver's Tribe, request the people you already know, and
              ride with someone familiar every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="/sign-up">Join a Tribe</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
