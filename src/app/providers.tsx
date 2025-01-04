import { NextUIProvider } from '@nextui-org/react'
import { Analytics } from "@vercel/analytics/react"

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            {children}
            <Analytics />
        </NextUIProvider>
    )
}