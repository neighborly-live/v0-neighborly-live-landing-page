export async function GET() {
  return Response.json(
    {
      applinks: {
        apps: [],
        details: [
          {
            appID: "CTB996HC2C.com.ajantallc.neighborly.dev",
            paths: ["/driver-application/*"],
          },
          {
            appID: "CTB996HC2C.com.ajantallc.neighborly",
            paths: ["/driver-application/*"],
          },
        ],
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}
