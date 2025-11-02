export function AppShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Your community, your rides</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
              Neighborly puts you in control. Choose drivers you trust, schedule rides that fit your life, and build
              lasting connections in your community.
            </p>
            <ul className="space-y-4">
              {[
                "Multiple tribe memberships for more options",
                "Real-time driver availability",
                "Secure in-app messaging",
                "Ride history and receipts",
                "Rate and review your experience",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src="/mobile-app-screens-showing-driver-tribes-and-ride-.jpg" alt="App Screenshots" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
