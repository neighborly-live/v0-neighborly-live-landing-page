import { useTranslations } from "next-intl"
import { Card } from "@/components/ui/card"
import { VideoEmbed } from "@/components/video-embed"
import { BackgroundCheckFlowchart } from "./background-check-flowchart"

const stepKeys = [
  {
    key: "verify",
    number: "01",
    useFlowchart: true,
  },
  {
    key: "joinTribe",
    number: "02",
    image: "/scanning-qr-code-to-join-driver-tribe.jpg",
    video: "https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/aaf19041-c286-4ec1-8b5b-ab02b0bad942.mp4",
  },
  {
    key: "bookRide",
    number: "03",
    image: "/booking-ride-with-trusted-driver-from-tribe.jpg",
    video: "https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/5edc3264-b6a9-4604-9b78-1947342eade0.mp4",
  },
  {
    key: "rideAndPay",
    number: "04",
    image: "/happy-rider-in-car-with-trusted-driver.jpg",
    video: "https://d2ol7oe51mr4n9.cloudfront.net/user_3HdgMsLyD8aJlayBaUxl564ErCR/57959e62-7593-4138-adec-61fe4d96a047.mp4",
    videoRatio: 16 / 9,
  },
] as const

export function HowItWorks() {
  const t = useTranslations("HowItWorks")

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">{t("heading")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">{t("subheading")}</p>
        </div>

        <div className="space-y-20">
          {stepKeys.map((step, index) => (
            <div
              key={step.key}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="text-6xl font-bold text-primary/30 mb-4">{step.number}</div>
                <h3 className="text-3xl font-bold mb-4">{t(`steps.${step.key}.title`)}</h3>
                <p className="text-xl text-foreground/80 leading-relaxed max-w-xl">
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
              <div className="flex-1">
                {"useFlowchart" in step && step.useFlowchart ? (
                  <BackgroundCheckFlowchart />
                ) : "video" in step && step.video ? (
                  <VideoEmbed
                    src={step.video}
                    poster={step.image}
                    mode="ambient"
                    ratio={"videoRatio" in step ? step.videoRatio ?? 9 / 16 : 9 / 16}
                  />
                ) : (
                  <Card className="overflow-hidden">
                    <img
                      src={("image" in step && step.image) || "/placeholder.svg"}
                      alt={t(`steps.${step.key}.title`)}
                      className="w-full h-auto"
                    />
                  </Card>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
