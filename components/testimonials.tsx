import { useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"

const testimonialKeys = [
  { key: "sarah", rating: 5 },
  { key: "michael", rating: 5 },
  { key: "emily", rating: 5 },
] as const

export function Testimonials() {
  const t = useTranslations("Testimonials")

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">{t("heading")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t("subheading")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialKeys.map(({ key, rating }) => (
            <Card key={key} className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-primary text-primary" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">{t(`items.${key}.content`)}</p>
              <div>
                <div className="font-semibold">{t(`items.${key}.name`)}</div>
                <div className="text-sm text-muted-foreground">{t(`items.${key}.role`)}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
