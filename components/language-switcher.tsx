"use client"

import { useLocale } from "next-intl"
import { Link, usePathname } from "@/i18n/navigation"
import { routing } from "@/i18n/routing"

const labels: Record<string, string> = {
  en: "EN",
  es: "ES",
}

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale()
  const pathname = usePathname()

  return (
    <div className={`flex items-center gap-1 text-sm font-medium ${className ?? ""}`}>
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-1">
          {i > 0 && <span className="text-muted-foreground" aria-hidden="true">/</span>}
          <Link
            href={pathname}
            locale={loc}
            aria-current={loc === locale ? "true" : undefined}
            className={
              loc === locale
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground transition-colors"
            }
          >
            {labels[loc]}
          </Link>
        </span>
      ))}
    </div>
  )
}
