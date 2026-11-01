import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"

export default async function SMSTermsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <SMSTermsContent />
}

function SMSTermsContent() {
  const t = useTranslations("SmsTerms")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <Button variant="ghost">{t("backToHome")}</Button>
            </Link>
            <LanguageSwitcher />
          </div>

          <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
          <p className="text-muted-foreground mb-8">{t("lastUpdated")}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("s1.heading")}</h2>
              <p className="text-foreground/90 leading-relaxed">{t("s1.body")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("s2.heading")}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("s2.nameLabel")}</h3>
                  <p className="text-foreground/90 leading-relaxed">{t("s2.nameValue")}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("s2.frequencyLabel")}</h3>
                  <p className="text-foreground/90 leading-relaxed">{t("s2.frequencyBody")}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">{t("s2.ratesLabel")}</h3>
                  <p className="text-foreground/90 leading-relaxed font-medium">{t("s2.ratesBody")}</p>
                  <p className="text-muted-foreground text-sm mt-2">{t("s2.ratesNote")}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("s3.heading")}</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">{t("s3.p1")}</p>
              <p className="text-foreground/90 leading-relaxed">{t("s3.p2")}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("s4.heading")}</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">{t("s4.intro")}</p>
              <ul className="space-y-2 text-foreground/90">
                <li>
                  <strong>{t("s4.emailLabel")}</strong>{" "}
                  <a href="mailto:support@neighborly.live" className="text-primary hover:underline">
                    support@neighborly.live
                  </a>
                </li>
                <li>
                  <strong>{t("s4.phoneLabel")}</strong>{" "}
                  <a href="tel:+12818493110" className="text-primary hover:underline">
                    (281) 849-3110
                  </a>
                </li>
                <li>
                  <strong>{t("s4.websiteLabel")}</strong>{" "}
                  <a href="https://www.neighborly.live" className="text-primary hover:underline">
                    https://www.neighborly.live
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">{t("s5.heading")}</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">{t("s5.intro")}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/terms">
                  <Button variant="outline">{t("s5.viewTerms")}</Button>
                </Link>
                <Link href="/privacy">
                  <Button variant="outline">{t("s5.viewPrivacy")}</Button>
                </Link>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-semibold mb-4">{t("s6.heading")}</h2>
              <p className="text-foreground/90 leading-relaxed">{t("s6.body")}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
