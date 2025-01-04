import {Analytics} from "@vercel/analytics/react"
import {MantineProvider} from "@mantine/core";
import {theme} from '@/mantine-theme';

export function Providers({children}: { children: React.ReactNode }) {
    return (
        <MantineProvider defaultColorScheme="auto" theme={theme}>
            {children}
            <Analytics />
        </MantineProvider>
    )
}
