import { CheckCircle, Shield, Car, UserCheck, XCircle, ChevronDown, CreditCard } from "lucide-react"

export function BackgroundCheckFlowchart() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 md:p-10">
      <div className="relative flex flex-col items-center">
        
        {/* START - Oval Terminal */}
        <div className="flex flex-col items-center">
          <div className="bg-primary text-primary-foreground px-8 py-3 rounded-full shadow-lg shadow-primary/20 font-semibold text-center">
            Start Application
          </div>
        </div>

        {/* Connector Line with Arrow */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-8 bg-primary/40" />
          <ChevronDown className="w-5 h-5 text-primary/60 -mt-2" />
        </div>

        {/* Process Box 1 - Rectangle */}
        <div className="flex flex-col items-center w-full max-w-xs">
          <div className="w-full bg-white border-2 border-primary/30 px-5 py-4 shadow-sm flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 shrink-0">
              <UserCheck className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Identity Verification</h3>
              <p className="text-xs text-muted-foreground">Government ID Check</p>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-6 bg-primary/40" />
          <ChevronDown className="w-5 h-5 text-primary/60 -mt-2" />
        </div>

        {/* Process Box 2 - Rectangle */}
        <div className="flex flex-col items-center w-full max-w-xs">
          <div className="w-full bg-white border-2 border-primary/30 px-5 py-4 shadow-sm flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 shrink-0">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Background Check</h3>
              <p className="text-xs text-muted-foreground">Criminal Records Search</p>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-6 bg-primary/40" />
          <ChevronDown className="w-5 h-5 text-primary/60 -mt-2" />
        </div>

        {/* Process Box 3 - Rectangle */}
        <div className="flex flex-col items-center w-full max-w-xs">
          <div className="w-full bg-white border-2 border-primary/30 px-5 py-4 shadow-sm flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 shrink-0">
              <Car className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">Driving Record</h3>
              <p className="text-xs text-muted-foreground">DMV & License Check</p>
            </div>
          </div>
        </div>

        {/* Connector to Decision */}
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-6 bg-primary/40" />
          <ChevronDown className="w-5 h-5 text-primary/60 -mt-2" />
        </div>

        {/* Decision Diamond */}
        <div className="flex flex-col items-center">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <div className="absolute inset-0 bg-amber-50 border-2 border-amber-400 rotate-45 shadow-md" />
            <span className="relative z-10 font-semibold text-amber-700 text-center text-sm px-2">
              All Checks<br />Passed?
            </span>
          </div>
        </div>

        {/* Decision Branches */}
        <div className="flex w-full max-w-md mt-4">
          {/* YES Path - Left */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-xs font-bold text-green-600 mb-1">YES</span>
            <div className="w-0.5 h-6 bg-green-400" />
            <ChevronDown className="w-5 h-5 text-green-500 -mt-2" />
            
            {/* Stripe Onboarding - Process Rectangle */}
            <div className="mt-1 w-full max-w-[180px] bg-white border-2 border-blue-400 px-4 py-3 shadow-sm flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 shrink-0">
                <CreditCard className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-xs">Stripe Onboarding</h3>
                <p className="text-[10px] text-muted-foreground">Payment Setup</p>
              </div>
            </div>
            
            <div className="w-0.5 h-4 bg-green-400 mt-2" />
            <ChevronDown className="w-5 h-5 text-green-500 -mt-2" />
            
            {/* Approved Oval */}
            <div className="mt-1 bg-green-100 border-2 border-green-500 px-5 py-2 rounded-full flex items-center gap-2 shadow-sm">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-green-700 text-xs">Driver Verified</span>
            </div>
            
            <div className="w-0.5 h-4 bg-green-400 mt-2" />
            <ChevronDown className="w-5 h-5 text-green-500 -mt-2" />
            
            {/* End Oval - QR Code */}
            <div className="mt-1 bg-green-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md text-center">
              Tribe QR Code Sent
            </div>
          </div>

          {/* NO Path - Right */}
          <div className="flex-1 flex flex-col items-center">
            <span className="text-xs font-bold text-red-500 mb-1">NO</span>
            <div className="w-0.5 h-6 bg-red-300" />
            <ChevronDown className="w-5 h-5 text-red-400 -mt-2" />
            {/* Rejected Oval */}
            <div className="mt-1 bg-red-50 border-2 border-red-400 px-6 py-3 rounded-full flex items-center gap-2 shadow-sm">
              <XCircle className="w-4 h-4 text-red-500" />
              <span className="font-semibold text-red-600 text-sm">Declined</span>
            </div>
            <div className="w-0.5 h-4 bg-red-300 mt-2" />
            <ChevronDown className="w-5 h-5 text-red-400 -mt-2" />
            {/* End Oval */}
            <div className="mt-1 bg-red-500 text-white px-5 py-2 rounded-full text-xs font-semibold shadow-md">
              Review Needed
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
