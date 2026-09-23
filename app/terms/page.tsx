export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: September 2026</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              By accessing or using Neighborly's mobile application and services, you agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use our platform.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              These terms constitute a legally binding agreement between you and Neighborly. We reserve the right to
              modify these terms at any time, and your continued use constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Neighborly is a trust-based ride-sharing platform that connects riders with verified drivers through
              community "tribes." Our platform facilitates:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Driver onboarding with background verification</li>
              <li>QR code-based tribe membership system</li>
              <li>Ride booking and driver matching within tribes</li>
              <li>Payment processing and transaction management</li>
              <li>Communication between riders and drivers</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-4">
              Neighborly acts as a technology platform connecting independent drivers with riders. We do not provide
              transportation services directly and are not a transportation carrier.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. User Eligibility</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.1 General Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>You must be at least 18 years of age</li>
              <li>You must provide accurate and complete registration information</li>
              <li>You must maintain the security of your account credentials</li>
              <li>You must comply with all applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">3.2 Driver Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Valid driver's license and vehicle registration</li>
              <li>Successful completion of background check</li>
              <li>Proof of vehicle insurance meeting minimum requirements</li>
              <li>Vehicle meeting safety and condition standards</li>
              <li>Compliance with all local transportation regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Tribe System</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.1 Driver Tribes</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Drivers create tribes and receive unique QR codes to share with prospective riders. Drivers are
              responsible for managing their tribe membership and maintaining trust within their community.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.2 Rider Membership</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Riders join tribes by scanning a driver's QR code. Riders may belong to multiple tribes. Tribe membership
              does not guarantee ride availability or acceptance.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">4.3 Tribe Removal</h3>
            <p className="text-foreground/90 leading-relaxed">
              Drivers may remove riders from their tribe at any time. Neighborly reserves the right to remove users from
              tribes or the platform for violations of these terms or safety concerns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Ride Booking and Acceptance</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Riders request rides through the app, selecting from their tribe drivers</li>
              <li>Drivers have sole discretion to accept or decline ride requests</li>
              <li>Accepted rides create a binding commitment for both parties</li>
              <li>
                Cancellations made after a driver has accepted a ride may result in a cancellation fee, which will be
                disclosed in the app before you confirm the cancellation
              </li>
              <li>Drivers must complete accepted rides unless safety concerns arise</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.1 Pricing</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Ride prices are calculated based on distance, time, and demand. Drivers may set their own rates within
              platform guidelines. All prices are displayed before ride confirmation.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Payment Processing</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Payments may be made before or after rides as agreed between rider and driver. Neighborly processes
              payments through secure third-party providers and charges a service fee on each transaction.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Refunds</h3>
            <p className="text-foreground/90 leading-relaxed">
              Refund requests are evaluated on a case-by-case basis. Disputes should be reported within 48 hours of ride
              completion. Neighborly's decision on refunds is final.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. User Conduct</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Violate any laws or regulations</li>
              <li>Harass, threaten, or harm other users</li>
              <li>Provide false or misleading information</li>
              <li>Use the platform for unauthorized commercial purposes</li>
              <li>Interfere with platform operations or security</li>
              <li>Share account credentials or QR codes inappropriately</li>
              <li>Discriminate against users based on protected characteristics</li>
              <li>Engage in fraudulent payment activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Safety and Insurance</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Drivers must maintain appropriate insurance coverage. Neighborly does not provide insurance for rides.
              Users participate at their own risk and should review their personal insurance policies.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Report safety concerns immediately through the app's emergency features. Neighborly investigates all
              safety reports and may suspend or terminate accounts pending investigation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="text-foreground/90 leading-relaxed">
              All content, trademarks, and intellectual property on the Neighborly platform are owned by Neighborly or
              licensed to us. You may not use, copy, or distribute our intellectual property without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Neighborly provides the platform "as is" without warranties. We are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Actions or omissions of drivers or riders</li>
              <li>Accidents, injuries, or property damage during rides</li>
              <li>Service interruptions or technical issues</li>
              <li>Loss of data or unauthorized account access</li>
              <li>Indirect, incidental, or consequential damages</li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-4">
              Our total liability is limited to the amount paid by you in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Indemnification</h2>
            <p className="text-foreground/90 leading-relaxed">
              You agree to indemnify and hold Neighborly harmless from any claims, damages, or expenses arising from
              your use of the platform, violation of these terms, or violation of any rights of third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">12. Termination</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              We may suspend or terminate your account at any time for violations of these terms, safety concerns, or
              fraudulent activity. You may terminate your account at any time through the app settings.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Upon termination, your right to use the platform ceases immediately. Provisions regarding liability,
              indemnification, and dispute resolution survive termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">13. Dispute Resolution</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Any disputes arising from these terms or use of the platform shall be resolved through binding arbitration
              in accordance with the rules of the American Arbitration Association.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              You waive the right to participate in class action lawsuits. This arbitration agreement does not preclude
              seeking relief in small claims court.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
            <p className="text-foreground/90 leading-relaxed">
              These terms are governed by the laws of the State of Texas, USA, without regard to conflict of law
              provisions. This applies regardless of your state, country, or territory of residence or the location
              from which you access or use the platform, except to the extent that mandatory consumer protection or
              other local laws of your jurisdiction cannot be waived and apply notwithstanding this choice of law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">15. Contact Information</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              For questions about these Terms of Service, contact us:
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-foreground/90 mb-2">Email: support@neighborly.live</p>
              <p className="text-foreground/90 mb-2">Address: 12166 Metric Blvd, Austin, TX 78613, USA</p>
              <p className="text-foreground/90">Phone: (281) 849-3110</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
