'use client'

import { ReactNode } from 'react'

import { EditorProvider } from '@/contexts/EditorContext'
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'

import CodeEditor from '../components/CodeEditor'
import Footer from '../components/Footer'
import Result from '../components/Result'

export default function Home() {
    return (
        <ThemeProvider>
            <EditorProvider>
                <HomePageLayout footer={<Footer />}>
                    <ThemeToggle />
                    <CodeEditor />
                    <Result />
                </HomePageLayout>
            </EditorProvider>
        </ThemeProvider>
    )
}

const HomePageLayout = ({
    children,
    footer,
}: {
    children: ReactNode[]
    footer: ReactNode
}) => {
    const { theme } = useTheme()

    return (
        <div
            className={`items-center justify-items-center h-screen ${theme === 'dark' ? 'dark' : ''}`}
        >
            <main className="flex flex-col gap-8 items-center md:items-start p-4 md:p-8 md:px-10 md:flex-row w-full max-w-screen-2xl h-full pb-6">
                {children}
            </main>
            {footer}
        </div>
    )
}

///
