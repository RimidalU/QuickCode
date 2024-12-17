'use client'

import clsx from 'clsx'
import { useState } from 'react'

import { LANGUAGES, SectionTitles } from '../models/common.model'

import SectionHeader from './SectionHeader'
import LanguageSelector from './LanguageSelector'
import CodeInput from './CodeInput'

interface ICodeEditorProps {
    className?: string
}

const CodeEditor = ({ className }: ICodeEditorProps) => {
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0])

    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language)
    }

    return (
        <section
            className={clsx('flex flex-col gap-2 w-1/2 h-full', className)}
        >
            <SectionHeader title={SectionTitles.CodeEditor} />
            <LanguageSelector
                options={LANGUAGES}
                onChange={handleLanguageChange}
                selectedLanguage={selectedLanguage}
            />
            <CodeInput />
        </section>
    )
}

export default CodeEditor
