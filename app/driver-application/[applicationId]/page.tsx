import { notFound } from "next/navigation"
import { OpenDriverApplication } from "./open-app"

const APPLICATION_ID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export default async function DriverApplicationResumePage({
  params,
}: {
  params: Promise<{ applicationId: string }> | { applicationId: string }
}) {
  const resolved = await Promise.resolve(params)
  const applicationId = resolved.applicationId

  if (!APPLICATION_ID_PATTERN.test(applicationId)) {
    notFound()
  }

  return <OpenDriverApplication applicationId={applicationId} />
}
