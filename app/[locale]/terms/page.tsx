import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { LanguageSwitcher } from "@/components/language-switcher"

export default async function TermsOfService({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return <TermsContent />
}

function TermsContent() {
  const t = useTranslations("Terms")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>
        <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
        <p className="text-muted-foreground mb-8">{t("lastUpdated")}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s1.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s1.p1")}</p>
            <p className="text-foreground/90 leading-relaxed">{t("s1.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s2.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s2.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("s2.items.i1")}</li>
              <li>{t("s2.items.i2")}</li>
              <li>{t("s2.items.i3")}</li>
              <li>{t("s2.items.i4")}</li>
              <li>{t("s2.items.i5")}</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-4">{t("s2.outro")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s3.heading")}</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("s3.s1Heading")}</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("s3.s1Items.i1")}</li>
              <li>{t("s3.s1Items.i2")}</li>
              <li>{t("s3.s1Items.i3")}</li>
              <li>{t("s3.s1Items.i4")}</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("s3.s2Heading")}</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("s3.s2Items.i1")}</li>
              <li>{t("s3.s2Items.i2")}</li>
              <li>{t("s3.s2Items.i3")}</li>
              <li>{t("s3.s2Items.i4")}</li>
              <li>{t("s3.s2Items.i5")}</li>
              <li>{t("s3.s2Items.i6")}</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("s3.s3Heading")}</h3>
            <p className="text-foreground/90 leading-relaxed">{t("s3.s3Body")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s4.heading")}</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("s4.s1Heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s4.s1Body")}</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("s4.s2Heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s4.s2Body")}</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("s4.s3Heading")}</h3>
            <p className="text-foreground/90 leading-relaxed">{t("s4.s3Body")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s5.heading")}</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("s5.items.i1")}</li>
              <li>{t("s5.items.i2")}</li>
              <li>{t("s5.items.i3")}</li>
              <li>{t("s5.items.i4")}</li>
              <li>{t("s5.items.i5")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s6.heading")}</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("s6.s1Heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s6.s1Body")}</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("s6.s2Heading")}</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s6.s2Body")}</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">{t("s6.s3Heading")}</h3>
            <p className="text-foreground/90 leading-relaxed">{t("s6.s3Body")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s7.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s7.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("s7.items.i1")}</li>
              <li>{t("s7.items.i2")}</li>
              <li>{t("s7.items.i3")}</li>
              <li>{t("s7.items.i4")}</li>
              <li>{t("s7.items.i5")}</li>
              <li>{t("s7.items.i6")}</li>
              <li>{t("s7.items.i7")}</li>
              <li>{t("s7.items.i8")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s8.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s8.p1")}</p>
            <p className="text-foreground/90 leading-relaxed">{t("s8.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s9.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s9.p1")}</p>
            <p className="text-foreground/90 leading-relaxed">{t("s9.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s10.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s10.intro")}</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>{t("s10.items.i1")}</li>
              <li>{t("s10.items.i2")}</li>
              <li>{t("s10.items.i3")}</li>
              <li>{t("s10.items.i4")}</li>
              <li>{t("s10.items.i5")}</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-4">{t("s10.outro")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s11.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed">{t("s11.body")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s12.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s12.p1")}</p>
            <p className="text-foreground/90 leading-relaxed">{t("s12.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s13.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s13.p1")}</p>
            <p className="text-foreground/90 leading-relaxed">{t("s13.p2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s14.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed">{t("s14.body")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t("s15.heading")}</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">{t("s15.intro")}</p>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-foreground/90 mb-2">{t("s15.email")}</p>
              <p className="text-foreground/90 mb-2">{t("s15.address")}</p>
              <p className="text-foreground/90">{t("s15.phone")}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
