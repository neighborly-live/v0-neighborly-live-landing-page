import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-12 sm:p-16 text-center shadow-xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance text-white">
            Ready to ride with your community?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/90 text-pretty">
            Join thousands of riders and drivers building safer, more connected communities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-50 font-semibold"
              asChild
            >
              <a href="https://apps.apple.com/app/neighborly/id6749149630" target="_blank" rel="noopener noreferrer">
                Download on App Store
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-600 font-semibold"
              asChild
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.neighborly.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get it on Google Play
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
