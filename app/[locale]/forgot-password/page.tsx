"use client"

import type React from "react"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function ForgotPasswordPage() {
  const t = useTranslations("ForgotPassword")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("[v0] Password reset request:", { email })
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4">
      <div className="w-full max-w-md">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-2xl">Neighborly</span>
          </Link>
          <h1 className="text-3xl font-bold text-balance mt-4">{t("title")}</h1>
          <p className="text-muted-foreground mt-2">
            {isSubmitted ? t("subtitleSubmitted") : t("subtitleDefault")}
          </p>
        </div>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>{t("cardTitle")}</CardTitle>
            <CardDescription>
              {isSubmitted ? t("cardDescSubmitted") : t("cardDescDefault")}
            </CardDescription>
          </CardHeader>
          {!isSubmitted ? (
            <>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("emailLabel")}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("emailPlaceholder")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                  <Button type="submit" className="w-full h-11" disabled={isLoading}>
                    {isLoading ? t("submitting") : t("submit")}
                  </Button>
                </form>
              </CardContent>
              <CardFooter>
                <p className="text-center text-sm text-muted-foreground w-full">
                  {t("rememberPassword")}{" "}
                  <Link href="/sign-in" className="text-primary font-medium hover:underline">
                    {t("signIn")}
                  </Link>
                </p>
              </CardFooter>
            </>
          ) : (
            <CardFooter className="flex flex-col gap-4">
              <div className="w-full p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-sm text-center">{t("submittedNotice", { email })}</p>
              </div>
              <Button asChild className="w-full h-11">
                <Link href="/sign-in">{t("backToSignIn")}</Link>
              </Button>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("tryDifferentEmail")}
              </button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  )
}
