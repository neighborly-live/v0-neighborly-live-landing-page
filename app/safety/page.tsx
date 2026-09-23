export default function SafetyGuidelines() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Safety Guidelines</h1>
        <p className="text-muted-foreground mb-8">Your safety is our top priority</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment to Safety</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Neighborly is built on trust and community. We've implemented comprehensive safety measures to protect
              both riders and drivers. While our tribe-based system creates trusted connections, we encourage all users
              to follow these safety guidelines.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Driver Safety Standards</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Background Checks</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              All drivers undergo comprehensive background checks before joining Neighborly, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Criminal history screening</li>
              <li>Driving record verification</li>
              <li>Identity verification</li>
              <li>Sex offender registry check</li>
              <li>Continuous monitoring for new violations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Vehicle Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Annual vehicle inspection and safety certification</li>
              <li>Valid registration and insurance documentation</li>
              <li>Clean, well-maintained vehicle condition</li>
              <li>Working seatbelts for all passengers</li>
              <li>Functional safety features (airbags, lights, brakes)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Before Your Ride</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">For Riders</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Verify the driver's profile photo matches the person picking you up</li>
              <li>Check the vehicle make, model, color, and license plate</li>
              <li>Share your trip details with a trusted friend or family member</li>
              <li>Wait in a safe, well-lit location</li>
              <li>Never share personal contact information before the ride</li>
              <li>Trust your instincts - cancel if something feels wrong</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">For Drivers</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Confirm the rider's identity before starting the trip</li>
              <li>Ensure your vehicle is clean and in good working condition</li>
              <li>Keep your profile information and photo up to date</li>
              <li>Plan your route in advance using the app's navigation</li>
              <li>Maintain appropriate insurance coverage</li>
              <li>Never accept rides outside the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">During Your Ride</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Best Practices</h3>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Always wear your seatbelt</li>
              <li>Sit in the back seat when riding alone</li>
              <li>Keep conversations respectful and professional</li>
              <li>Follow the GPS route provided by the app</li>
              <li>Keep personal belongings secure</li>
              <li>Avoid distractions - no phone use while driving</li>
              <li>Respect personal boundaries and space</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Red Flags</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">End the ride immediately and report if:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>The driver appears impaired or drives recklessly</li>
              <li>The route deviates significantly without explanation</li>
              <li>You feel threatened or uncomfortable</li>
              <li>The driver makes inappropriate comments or advances</li>
              <li>The vehicle condition seems unsafe</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">In-App Safety Features</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Emergency Assistance</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Access emergency services directly through the app with one tap. Your location and trip details are
              automatically shared with emergency responders.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Trip Sharing</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Share your real-time location and trip details with trusted contacts. They can follow your journey and
              receive notifications when you arrive safely.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Two-Way Ratings</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Both riders and drivers rate each other after trips. Low ratings trigger safety reviews and may result in
              account suspension.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Safety Team Support</h3>
            <p className="text-foreground/90 leading-relaxed">
              The in-app emergency button and trip-sharing features are available 24/7. Our safety team reviews and
              responds to reports during business hours (Monday - Friday, 9am - 6pm CST). For immediate danger,
              always call 911 first.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tribe Safety</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              The tribe system creates trusted communities, but safety remains everyone's responsibility:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Drivers should only share QR codes with people they trust</li>
              <li>Riders should join tribes of drivers they know or who come recommended</li>
              <li>Report any suspicious behavior within your tribe</li>
              <li>Drivers can remove riders from their tribe at any time</li>
              <li>Multiple tribe memberships provide backup options</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Reporting Safety Concerns</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">How to Report</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">Report safety issues immediately through:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>In-app emergency button during active rides (available 24/7)</li>
              <li>Trip history report feature after ride completion</li>
              <li>Safety line: (281) 849-3110 (Monday - Friday, 9am - 6pm CST)</li>
              <li>Email: support@neighborly.live</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">What Happens Next</h3>
            <p className="text-foreground/90 leading-relaxed mb-4">All safety reports are taken seriously:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Immediate review by our safety team</li>
              <li>Account suspension pending investigation for serious violations</li>
              <li>Cooperation with law enforcement when necessary</li>
              <li>Follow-up communication with reporting party</li>
              <li>Permanent ban for confirmed safety violations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">COVID-19 Safety</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Follow local health guidelines and regulations</li>
              <li>Wear masks when required or requested</li>
              <li>Maintain vehicle cleanliness and ventilation</li>
              <li>Cancel rides if feeling unwell</li>
              <li>Respect others' health preferences and boundaries</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Insurance and Liability</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Drivers must maintain appropriate insurance coverage. Neighborly does not provide insurance for rides.
              Review your personal insurance policy to understand coverage during ride-sharing activities.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              In case of accidents, exchange insurance information and file a police report. Contact our support team
              for assistance with incident documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Community Standards</h2>
            <p className="text-foreground/90 leading-relaxed mb-4">
              Neighborly is built on mutual respect and trust. We expect all users to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Treat others with courtesy and respect</li>
              <li>Maintain appropriate behavior and language</li>
              <li>Respect personal space and boundaries</li>
              <li>Follow all traffic laws and regulations</li>
              <li>Keep vehicles clean and smoke-free</li>
              <li>Honor commitments and arrive on time</li>
              <li>Provide honest ratings and feedback</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Safety Resources</h2>
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <div>
                <p className="font-semibold text-foreground mb-1">Emergency Services</p>
                <p className="text-foreground/90">Call 911 for immediate emergencies</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Neighborly Safety Line</p>
                <p className="text-foreground/90">(281) 849-3110 (Monday - Friday, 9am - 6pm CST)</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">Safety Email</p>
                <p className="text-foreground/90">support@neighborly.live</p>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">General Support</p>
                <p className="text-foreground/90">support@neighborly.live</p>
              </div>
            </div>
          </section>

          <section className="bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">Remember</h2>
            <p className="text-foreground/90 leading-relaxed">
              Your safety is paramount. Trust your instincts. If something doesn't feel right, it probably isn't. Don't
              hesitate to cancel a ride, end a trip early, or contact emergency services. Our in-app safety tools are
              available 24/7, and our team is ready to help during business hours.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
