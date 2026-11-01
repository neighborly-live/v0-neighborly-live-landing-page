import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { LanguageSwitcher } from "@/components/language-switcher"

const offerKeys = ["compensation", "remote", "growth", "balance", "impact"] as const
const positionKeys = ["engineer", "designer", "opsManager", "marketing"] as const

export default async function Careers({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <CareersContent />
}

function CareersContent() {
  const t = useTranslations("Careers")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>
        <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
        <p className="text-muted-foreground mb-8">{t("subtitle")}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("why.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("why.body")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("offer.heading")}</h2>
            <div className="space-y-4">
              {offerKeys.map((key) => (
                <div key={key} className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{t(`offer.${key}.title`)}</h3>
                  <p className="text-foreground/90 leading-relaxed">{t(`offer.${key}.description`)}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("positions.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-6">{t("positions.intro")}</p>

            <div className="space-y-4">
              {positionKeys.map((key) => (
                <div key={key} className="border border-gray-200 p-6 rounded-lg hover:border-primary transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{t(`positions.${key}.title`)}</h3>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {t(`positions.${key}.department`)}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">{t("positions.locationType")}</p>
                  <p className="text-foreground/90 leading-relaxed">{t(`positions.${key}.description`)}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("apply.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("apply.intro")}</p>
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-foreground/90 mb-2">
                <strong>Email:</strong>{" "}
                <a href="mailto:careers@neighborly.live" className="text-primary hover:underline">
                  careers@neighborly.live
                </a>
              </p>
              <p className="text-foreground/90 text-sm mt-4">{t("apply.note")}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("other.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed">{t("other.body")}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
