'use client'

import clsx from 'clsx'
import React, { ReactNode, useState } from 'react'

import { executeCode } from '@/services/piston.service'
import { useEditor } from '@/contexts/EditorContext'

import { SectionTitles } from '../models/common.model'

import SectionHeader from './SectionHeader'
import Button from './Button'
import OutputViewer from './OutputViewer'

interface IResultProps {
    className?: string
}

const Result = ({ className }: IResultProps) => {
    const { selectedLanguage, value } = useEditor()

    const [result, setResult] = useState<string | null>(null)

    const handleClick = async () => {
        const res = await executeCode({
            language: selectedLanguage.language,
            version: selectedLanguage.version,
            content: value,
        })
        setResult(res.run.output)
    }
    return (
        <ResultLayout className={className}>
            <SectionHeader title={SectionTitles.Result} />
            <Button onClick={handleClick}>Run Code</Button>
            <OutputViewer result={result} />
        </ResultLayout>
    )
}

export default Result

interface ICResultLayoutLayoutProps {
    className?: string
    children: ReactNode[]
}

export const ResultLayout = ({
    className,
    children,
}: ICResultLayoutLayoutProps) => {
    return (
        <section
            className={clsx(
                'flex flex-col gap-2 w-full md:w-1/2 h-1/2 md:h-full',
                className
            )}
        >
            {children}
        </section>
    )
}
