import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { VideoEmbed } from '@/components/video-embed'
import { Link } from '@/i18n/navigation'

export function ForDriversAndRiders() {
  const t = useTranslations('ForDriversAndRiders')

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">{t('heading')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t('subheading')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-center text-center">
            <VideoEmbed
              src="https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/784af6d8-7160-4d39-acf3-79855a5b5b6c.mp4"
              poster="/driver-recognizes-returning-passenger-at-curb.jpg"
              mode="narrative"
              className="max-w-sm w-full mb-6"
            />
            <h3 className="text-2xl font-bold mb-3">{t('drivers.title')}</h3>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-md mb-6">{t('drivers.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="https://apps.apple.com/app/neighborly/id6749149630" target="_blank" rel="noopener noreferrer">
                  {t('drivers.cta')}
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
            <h3 className="text-2xl font-bold mb-3">{t('riders.title')}</h3>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-md mb-6">{t('riders.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link href="/sign-up">{t('riders.cta')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
