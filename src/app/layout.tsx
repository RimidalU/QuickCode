import type { Metadata } from 'next'

import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

import { TOAST_OPTIONS } from '@/models/toaster.model'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'QuickCode - compact and intuitive code editor designed for developers who value simplicity and efficiency',
    description:
        'With its help, you can quickly write, edit and test code without being distracted by unnecessary actions.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased `}
            >
                {children}
                <Toaster
                    closeButton
                    position="top-right"
                    toastOptions={TOAST_OPTIONS}
                />
            </body>
        </html>
    )
}
