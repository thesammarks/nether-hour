import { NextUIProvider } from '@nextui-org/react'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {children}
      <Analytics />
      <SpeedInsights />
    </NextUIProvider>
  )
}