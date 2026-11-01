import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { LanguageSwitcher } from "@/components/language-switcher"

export default async function SafetyGuidelines({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <SafetyContent />
}

function SafetyContent() {
  const t = useTranslations("Safety")

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
            <h2 className="text-2xl font-semibold mb-4">{t("commitment.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("commitment.body")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("driverStandards.heading")}</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("driverStandards.backgroundChecks.heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("driverStandards.backgroundChecks.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("driverStandards.backgroundChecks.items.i1")}</li>
              <li>{t("driverStandards.backgroundChecks.items.i2")}</li>
              <li>{t("driverStandards.backgroundChecks.items.i3")}</li>
              <li>{t("driverStandards.backgroundChecks.items.i4")}</li>
              <li>{t("driverStandards.backgroundChecks.items.i5")}</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("driverStandards.vehicleRequirements.heading")}</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("driverStandards.vehicleRequirements.items.i1")}</li>
              <li>{t("driverStandards.vehicleRequirements.items.i2")}</li>
              <li>{t("driverStandards.vehicleRequirements.items.i3")}</li>
              <li>{t("driverStandards.vehicleRequirements.items.i4")}</li>
              <li>{t("driverStandards.vehicleRequirements.items.i5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("beforeRide.heading")}</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("beforeRide.forRiders.heading")}</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("beforeRide.forRiders.items.i1")}</li>
              <li>{t("beforeRide.forRiders.items.i2")}</li>
              <li>{t("beforeRide.forRiders.items.i3")}</li>
              <li>{t("beforeRide.forRiders.items.i4")}</li>
              <li>{t("beforeRide.forRiders.items.i5")}</li>
              <li>{t("beforeRide.forRiders.items.i6")}</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("beforeRide.forDrivers.heading")}</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("beforeRide.forDrivers.items.i1")}</li>
              <li>{t("beforeRide.forDrivers.items.i2")}</li>
              <li>{t("beforeRide.forDrivers.items.i3")}</li>
              <li>{t("beforeRide.forDrivers.items.i4")}</li>
              <li>{t("beforeRide.forDrivers.items.i5")}</li>
              <li>{t("beforeRide.forDrivers.items.i6")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("duringRide.heading")}</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("duringRide.bestPractices.heading")}</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("duringRide.bestPractices.items.i1")}</li>
              <li>{t("duringRide.bestPractices.items.i2")}</li>
              <li>{t("duringRide.bestPractices.items.i3")}</li>
              <li>{t("duringRide.bestPractices.items.i4")}</li>
              <li>{t("duringRide.bestPractices.items.i5")}</li>
              <li>{t("duringRide.bestPractices.items.i6")}</li>
              <li>{t("duringRide.bestPractices.items.i7")}</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("duringRide.redFlags.heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("duringRide.redFlags.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("duringRide.redFlags.items.i1")}</li>
              <li>{t("duringRide.redFlags.items.i2")}</li>
              <li>{t("duringRide.redFlags.items.i3")}</li>
              <li>{t("duringRide.redFlags.items.i4")}</li>
              <li>{t("duringRide.redFlags.items.i5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("resources.heading")}</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("resources.helpCenter.heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("resources.helpCenter.body")}</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("resources.shareTrip.heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("resources.shareTrip.body")}</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("resources.ratings.heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("resources.ratings.body")}</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("resources.teamSupport.heading")}</h3>
            <p className="text-foreground/90 leading-relaxed">{t("resources.teamSupport.body")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("tribeSafety.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("tribeSafety.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("tribeSafety.items.i1")}</li>
              <li>{t("tribeSafety.items.i2")}</li>
              <li>{t("tribeSafety.items.i3")}</li>
              <li>{t("tribeSafety.items.i4")}</li>
              <li>{t("tribeSafety.items.i5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("reporting.heading")}</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("reporting.howToReport.heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("reporting.howToReport.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("reporting.howToReport.appCenter")}</li>
              <li>{t("reporting.howToReport.postRide")}</li>
              <li>
                {t("reporting.howToReport.safetyLineLabel")}{" "}
                <a href="tel:+12818493110" className="text-primary hover:underline">
                  (281) 849-3110
                </a>{" "}
                {t("reporting.howToReport.safetyLineHours")}
              </li>
              <li>
                {t("reporting.howToReport.emailLabel")}{" "}
                <a href="mailto:support@neighborly.live" className="text-primary hover:underline">
                  support@neighborly.live
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("reporting.whatHappensNext.heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("reporting.whatHappensNext.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("reporting.whatHappensNext.items.i1")}</li>
              <li>{t("reporting.whatHappensNext.items.i2")}</li>
              <li>{t("reporting.whatHappensNext.items.i3")}</li>
              <li>{t("reporting.whatHappensNext.items.i4")}</li>
              <li>{t("reporting.whatHappensNext.items.i5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("covid.heading")}</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("covid.items.i1")}</li>
              <li>{t("covid.items.i2")}</li>
              <li>{t("covid.items.i3")}</li>
              <li>{t("covid.items.i4")}</li>
              <li>{t("covid.items.i5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("insurance.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("insurance.p1")}</p>
            <p className="text-foreground/90 leading-relaxed">{t("insurance.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("communityStandards.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("communityStandards.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("communityStandards.items.i1")}</li>
              <li>{t("communityStandards.items.i2")}</li>
              <li>{t("communityStandards.items.i3")}</li>
              <li>{t("communityStandards.items.i4")}</li>
              <li>{t("communityStandards.items.i5")}</li>
              <li>{t("communityStandards.items.i6")}</li>
              <li>{t("communityStandards.items.i7")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("resourcesBox.heading")}</h2>
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <div>
                <p className="font-semibold text-foreground mb-1">{t("resourcesBox.emergency.label")}</p>
                <p className="text-foreground/90">{t("resourcesBox.emergency.body")}</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{t("resourcesBox.safetyLine.label")}</p>
                <p className="text-foreground/90">
                  <a href="tel:+12818493110" className="text-primary hover:underline">
                    (281) 849-3110
                  </a>{" "}
                  {t("resourcesBox.safetyLine.hours")}
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{t("resourcesBox.safetyEmail.label")}</p>
                <p className="text-foreground/90">
                  <a href="mailto:support@neighborly.live" className="text-primary hover:underline">
                    support@neighborly.live
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">{t("resourcesBox.generalSupport.label")}</p>
                <p className="text-foreground/90">
                  <a href="mailto:support@neighborly.live" className="text-primary hover:underline">
                    support@neighborly.live
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">{t("remember.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed">{t("remember.body")}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
