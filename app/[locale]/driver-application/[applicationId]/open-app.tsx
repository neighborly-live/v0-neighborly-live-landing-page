"use client"

import { useEffect } from "react"
import { useTranslations } from "next-intl"

export function OpenDriverApplication({
  applicationId,
}: {
  applicationId: string
}) {
  const t = useTranslations("DriverApplication")
  const appUrl = `neighborlyy://driver-application/${applicationId}`

  useEffect(() => {
    window.location.replace(appUrl)
  }, [appUrl])

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <section className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-muted-foreground">{t("body")}</p>
        <a
          href={appUrl}
          className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 font-semibold"
        >
          {t("button")}
        </a>
      </section>
    </main>
  )
}
