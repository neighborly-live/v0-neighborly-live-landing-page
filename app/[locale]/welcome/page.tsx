"use client"

import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Link, useRouter } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WelcomePage() {
  const t = useTranslations("Welcome")
  const [userName, setUserName] = useState("")
  const router = useRouter()

  useEffect(() => {
    // Get user data from localStorage
    const userDataStr = localStorage.getItem("neighborly_user")
    const isAuthenticated = localStorage.getItem("neighborly_auth")

    if (!isAuthenticated || !userDataStr) {
      // Redirect to sign-up if not authenticated
      router.push("/sign-up")
      return
    }

    try {
      const userData = JSON.parse(userDataStr)
      setUserName(userData.fullName)
    } catch (err) {
      console.error("Error parsing user data:", err)
      router.push("/sign-up")
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-12">
      <div className="w-full max-w-2xl">
        <Card className="border-2 text-center">
          <CardHeader className="space-y-4 pb-8">
            <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <CardTitle className="text-3xl">
              {userName ? t("titleWithName", { name: userName }) : t("titleNoName")}
            </CardTitle>
            <CardDescription className="text-base">{t("description")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pb-8">
            <div className="grid gap-4 text-left">
              <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("download.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("download.body")}</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("joinTribe.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("joinTribe.body")}</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t("safe.title")}</h3>
                  <p className="text-sm text-muted-foreground">{t("safe.body")}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button asChild className="flex-1 h-11">
                <Link href="/">{t("returnHome")}</Link>
              </Button>
              <Button asChild variant="outline" className="flex-1 h-11 bg-transparent">
                <Link href="/sign-in">{t("signIn")}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
