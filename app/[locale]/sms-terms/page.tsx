import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SMSTermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              ← Back to Home
            </Button>
          </Link>

          <h1 className="text-4xl font-bold mb-6">SMS Terms & Opt-In</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 10, 2025</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Neighborly SMS Verification Program</h2>
              <p className="text-foreground/90 leading-relaxed">
                By providing your phone number and opting in, you agree to receive SMS messages from Neighborly for
                account verification, ride notifications, and service updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Program Details</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Program Name</h3>
                  <p className="text-foreground/90 leading-relaxed">Neighborly SMS Verification Program</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Message Frequency</h3>
                  <p className="text-foreground/90 leading-relaxed">
                    Message frequency varies; you may receive messages each time you sign up or log in to your
                    Neighborly account. You may also receive ride notifications when booking or accepting rides.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Message and Data Rates</h3>
                  <p className="text-foreground/90 leading-relaxed font-medium">Message and data rates may apply.</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Standard messaging rates from your mobile carrier will apply to all SMS messages sent and received.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Opt Out</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                You can opt out of SMS messages at any time by replying <strong>STOP</strong> to any Neighborly message.
                After you send the message "STOP", we will send you a confirmation message that you have been
                unsubscribed.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                Please note that opting out of SMS messages may affect your ability to receive important ride
                notifications and account updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Customer Care</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                For help or questions about SMS messages, you can contact Neighborly support:
              </p>
              <ul className="space-y-2 text-foreground/90">
                <li>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@neighborly.live" className="text-primary hover:underline">
                    support@neighborly.live
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+12818493110" className="text-primary hover:underline">
                    (281) 849-3110
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a href="https://www.neighborly.live" className="text-primary hover:underline">
                    https://www.neighborly.live
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Related Policies</h2>
              <p className="text-foreground/90 leading-relaxed mb-4">
                For more information about how we handle your data and our service terms, please review:
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/terms">
                  <Button variant="outline">View Terms & Conditions</Button>
                </Link>
                <Link href="/privacy">
                  <Button variant="outline">View Privacy Policy</Button>
                </Link>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-semibold mb-4">Consent</h2>
              <p className="text-foreground/90 leading-relaxed">
                By providing your phone number during registration or login, you expressly consent to receive SMS
                messages from Neighborly as described above. Your consent is not required as a condition of purchasing
                any goods or services, and you may opt out at any time by replying STOP.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
