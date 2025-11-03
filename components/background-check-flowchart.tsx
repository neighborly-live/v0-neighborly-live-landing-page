export function BackgroundCheckFlowchart() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-background rounded-lg border">
      <div className="space-y-6">
        {/* Start */}
        <div className="flex flex-col items-center">
          <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-lg">
            Driver Application Submitted
          </div>
          <div className="w-0.5 h-8 bg-border my-2"></div>
        </div>

        {/* Identity Verification */}
        <div className="flex flex-col items-center">
          <div className="bg-card border-2 border-primary px-6 py-4 rounded-lg w-full max-w-md text-center">
            <h3 className="font-bold text-lg mb-2">Identity Verification</h3>
            <p className="text-sm text-muted-foreground">Government ID & Document Check</p>
          </div>
          <div className="w-0.5 h-8 bg-border my-2"></div>
        </div>

        {/* Criminal Background Check */}
        <div className="flex flex-col items-center">
          <div className="bg-card border-2 border-primary px-6 py-4 rounded-lg w-full max-w-md text-center">
            <h3 className="font-bold text-lg mb-2">Criminal Background Check</h3>
            <p className="text-sm text-muted-foreground">National & Local Records Search</p>
          </div>
          <div className="w-0.5 h-8 bg-border my-2"></div>
        </div>

        {/* Driving Record Check */}
        <div className="flex flex-col items-center">
          <div className="bg-card border-2 border-primary px-6 py-4 rounded-lg w-full max-w-md text-center">
            <h3 className="font-bold text-lg mb-2">Driving Record Check</h3>
            <p className="text-sm text-muted-foreground">DMV History & License Verification</p>
          </div>
          <div className="w-0.5 h-8 bg-border my-2"></div>
        </div>

        {/* Decision Diamond */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 flex items-center justify-center">
            <div className="absolute inset-0 bg-amber-100 dark:bg-amber-950 border-2 border-amber-500 rotate-45"></div>
            <span className="relative z-10 font-bold text-center px-4">All Checks Passed?</span>
          </div>
          <div className="flex gap-8 mt-8 w-full max-w-2xl">
            {/* Yes Path */}
            <div className="flex-1 flex flex-col items-center">
              <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">YES</div>
              <div className="w-0.5 h-8 bg-border"></div>
              <div className="bg-green-100 dark:bg-green-950 border-2 border-green-500 px-6 py-4 rounded-lg text-center w-full">
                <h3 className="font-bold text-lg mb-2 text-green-700 dark:text-green-300">Approved</h3>
                <p className="text-sm text-green-600 dark:text-green-400">QR Code Generated & Sent</p>
              </div>
            </div>

            {/* No Path */}
            <div className="flex-1 flex flex-col items-center">
              <div className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">NO</div>
              <div className="w-0.5 h-8 bg-border"></div>
              <div className="bg-red-100 dark:bg-red-950 border-2 border-red-500 px-6 py-4 rounded-lg text-center w-full">
                <h3 className="font-bold text-lg mb-2 text-red-700 dark:text-red-300">Rejected</h3>
                <p className="text-sm text-red-600 dark:text-red-400">Application Denied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
