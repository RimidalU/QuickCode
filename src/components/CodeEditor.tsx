'use client'

import type monaco from 'monaco-editor'

import clsx from 'clsx'
import { useRef, useState } from 'react'
import { Editor, OnMount } from '@monaco-editor/react'

import { LANGUAGES_SNIPPETS, MONACO_THEMES } from '@/models/editor.model'

import { LANGUAGES, SectionTitles } from '../models/common.model'

import SectionHeader from './SectionHeader'
import LanguageSelector from './LanguageSelector'

interface ICodeEditorProps {
    className?: string
}

const CodeEditor = ({ className }: ICodeEditorProps) => {
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null)
    const [selectedLanguage, setSelectedLanguage] = useState(LANGUAGES[0])
    const [value, setValue] = useState(LANGUAGES_SNIPPETS[0])

    const handleEditorDidMount: OnMount = (editor) => {
        editorRef.current = editor
        editor.focus()
    }
    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(language)
        setValue(LANGUAGES_SNIPPETS[language])
    }

    return (
        <section
            className={clsx(
                'flex flex-col gap-2 w-full md:w-1/2 h-1/2 md:h-full',
                className
            )}
        >
            <SectionHeader title={SectionTitles.CodeEditor} />
            <LanguageSelector
                options={LANGUAGES}
                onChange={handleLanguageChange}
                selectedLanguage={selectedLanguage}
            />
            <Editor
                className="border"
                options={{
                    minimap: {
                        enabled: false,
                    },
                }}
                height="100%"
                theme={MONACO_THEMES[1]}
                language={selectedLanguage}
                defaultValue={LANGUAGES_SNIPPETS[selectedLanguage]}
                onMount={handleEditorDidMount}
                value={value}
                onChange={(value) => setValue(value ?? '')}
            />
        </section>
    )
}

export default CodeEditor
