import { useTranslations } from "next-intl"

const bulletKeys = ["multiTribe", "availability", "history", "review"] as const

export function AppShowcase() {
  const t = useTranslations("AppShowcase")

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,195,74,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,195,74,0.05),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance text-gray-900">{t("heading")}</h2>
            <p className="text-xl mb-8 text-gray-700 leading-relaxed">{t("description")}</p>
            <ul className="space-y-4">
              {bulletKeys.map((key) => (
                <li key={key} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#8BC34A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-700">{t(`bullets.${key}`)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/mobile-app-screens-showing-driver-tribes-and-ride-.jpg"
                alt="App Screenshots"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
