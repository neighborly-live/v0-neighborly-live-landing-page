import { useTranslations } from 'next-intl'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { VideoEmbed } from '@/components/video-embed'

const clips = [
  {
    key: 'senior',
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/ba6681b0-020b-48ba-b504-1314ff9ca290.mp4',
    poster: '/senior-rider-scanning-driver-qr-code.jpg',
  },
  {
    key: 'family',
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/853dd7eb-f850-483a-ae5b-50b13f1b411d.mp4',
    poster: '/parent-scanning-qr-code-for-teen-driver.jpg',
  },
  {
    key: 'redEye',
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/50e3a603-7ed6-4043-94b4-6df9b2121469.mp4',
    poster: '/driver-waiting-late-night-airport-arrival.jpg',
  },
  {
    key: 'commuter',
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/ea01765e-86b3-487e-afbb-bb9a902fbf49.mp4',
    poster: '/weekly-business-traveler-with-regular-driver.jpg',
  },
  {
    key: 'seniorFamily',
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/47266465-7fc2-4ebf-bef6-d779e9d8ccd9.mp4',
    poster: '/senior-rider-family-trust-same-driver.jpg',
  },
  {
    key: 'college',
    src: 'https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/822b93e6-9a6e-4a26-92a5-5ff268719d27.mp4',
    poster: '/parent-and-college-student-joining-driver-tribe.jpg',
  },
] as const

export function VideoGallery() {
  const t = useTranslations('VideoGallery')

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">{t('heading')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t('subheading')}</p>
        </div>

        <Carousel opts={{ align: 'start' }} className="w-full">
          <CarouselContent>
            {clips.map((clip) => (
              <CarouselItem key={clip.key} className="sm:basis-1/2 lg:basis-1/3">
                <VideoEmbed src={clip.src} poster={clip.poster} mode="narrative" />
                <h3 className="text-lg font-semibold mt-4 mb-1 text-balance">{t(`clips.${clip.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`clips.${clip.key}.description`)}</p>
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
