import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { VideoEmbed } from '@/components/video-embed'

const clips = [
  {
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/ba6681b0-020b-48ba-b504-1314ff9ca290.mp4',
    poster: '/senior-rider-scanning-driver-qr-code.jpg',
    title: 'Some Tribes start on ride one.',
    description: 'A regular rider who scanned in month one, and never looked back.',
  },
  {
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/853dd7eb-f850-483a-ae5b-50b13f1b411d.mp4',
    poster: '/parent-scanning-qr-code-for-teen-driver.jpg',
    title: 'Family trust, one driver.',
    description: "A parent scans a driver's code after seeing them safely drop off their teenager.",
  },
  {
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/50e3a603-7ed6-4043-94b4-6df9b2121469.mp4',
    poster: '/driver-waiting-late-night-airport-arrival.jpg',
    title: 'Even at midnight, you’re expected.',
    description: 'The same driver waiting at arrivals at 11pm — the relationship holds at any hour.',
  },
  {
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/ea01765e-86b3-487e-afbb-bb9a902fbf49.mp4',
    poster: '/weekly-business-traveler-with-regular-driver.jpg',
    title: 'A standing relationship, not a one-off booking.',
    description: 'A consultant who flies out every Monday, with the same driver every time.',
  },
  {
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/47266465-7fc2-4ebf-bef6-d779e9d8ccd9.mp4',
    poster: '/senior-rider-family-trust-same-driver.jpg',
    title: 'Reassurance through familiarity.',
    description: 'An older rider’s family sees her picked up by the same driver she’s used for months.',
  },
  {
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/822b93e6-9a6e-4a26-92a5-5ff268719d27.mp4',
    poster: '/parent-and-college-student-joining-driver-tribe.jpg',
    title: 'Trust transferred, not just a ride booked.',
    description: "A parent helps their college-bound kid join a verified local driver's Tribe before move-in day.",
  },
]

export function VideoGallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Every rider, every reason</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Neighborly works the same way across every kind of trip — here's what it looks like.
          </p>
        </div>

        <Carousel opts={{ align: 'start' }} className="w-full">
          <CarouselContent>
            {clips.map((clip, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <VideoEmbed src={clip.src} poster={clip.poster} mode="narrative" />
                <h3 className="text-lg font-semibold mt-4 mb-1 text-balance">{clip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{clip.description}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}
