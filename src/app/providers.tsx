import {Analytics} from "@vercel/analytics/react"
import {MantineProvider} from "@mantine/core";
import {theme} from '@/app/mantine-theme';
import {SpeedInsights} from "@vercel/speed-insights/next"

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <MantineProvider defaultColorScheme="dark" forceColorScheme="dark" theme={theme}>
            {children}
            <Analytics />
            <SpeedInsights />
        </MantineProvider>
    )
}
