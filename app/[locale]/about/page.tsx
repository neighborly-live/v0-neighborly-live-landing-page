import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"

const valueKeys = ["trust", "community", "safety", "flexibility"] as const

export default async function AboutUs({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <AboutContent />
}

function AboutContent() {
  const t = useTranslations("About")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
        <p className="text-muted-foreground mb-8">{t("subtitle")}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("mission.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("mission.p1")}</p>
            <p className="text-foreground/90 leading-relaxed">{t("mission.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("story.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("story.p1")}</p>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("story.p2")}</p>
            <p className="text-foreground/90 leading-relaxed">{t("story.p3")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("values.heading")}</h2>
            <div className="space-y-6">
              {valueKeys.map((key) => (
                <div key={key}>
                  <h3 className="text-xl font-semibold mb-2">{t(`values.${key}.title`)}</h3>
                  <p className="text-foreground/90 leading-relaxed">{t(`values.${key}.description`)}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("team.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("team.p1")}</p>
            <p className="text-foreground/90 leading-relaxed">{t("team.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("contact.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("contact.intro")}</p>
            <div className="bg-muted/50 p-6 rounded-lg space-y-2">
              <p className="text-foreground/90">
                <strong>{t("contact.email")}:</strong> support@neighborly.live
              </p>
              <p className="text-foreground/90">
                <strong>{t("contact.phone")}:</strong> (281) 849-3110
              </p>
              <p className="text-foreground/90">
                <strong>{t("contact.address")}:</strong> 12166 Metric Blvd, Austin, TX 78613, USA
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
