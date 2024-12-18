'use client'

import type monaco from 'monaco-editor'

import clsx from 'clsx'
import { ReactNode, useRef } from 'react'
import { Editor, OnMount } from '@monaco-editor/react'

import {
    LANGUAGES_SNIPPETS,
    MONACO_THEMES,
    unknownSniper,
} from '@/models/editor.model'
import { useEditor } from '@/contexts/EditorContext'

import { SectionTitles } from '../models/common.model'

import SectionHeader from './SectionHeader'
import LanguageSelector from './LanguageSelector'

interface ICodeEditorProps {
    className?: string
}

const CodeEditor = ({ className }: ICodeEditorProps) => {
    const {
        selectedLanguage,
        setSelectedLanguage,
        value,
        setValue,
        favoriteLanguages,
    } = useEditor()

    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null)
    const handleEditorDidMount: OnMount = (editor) => {
        editorRef.current = editor
        editor.focus()
    }
    const handleLanguageChange = (language: string) => {
        setSelectedLanguage(
            favoriteLanguages.filter((lang) => lang.language === language)[0]
        )
        setValue(LANGUAGES_SNIPPETS[language] ?? unknownSniper)
    }

    return (
        <CodeEditorLayout className={className}>
            <SectionHeader title={SectionTitles.CodeEditor} />
            <LanguageSelector
                options={favoriteLanguages}
                onChange={handleLanguageChange}
                selectedLanguage={selectedLanguage.language}
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
                language={selectedLanguage.language}
                defaultValue={LANGUAGES_SNIPPETS[selectedLanguage.language]}
                onMount={handleEditorDidMount}
                value={value}
                onChange={(value) => setValue(value ?? '')}
            />
        </CodeEditorLayout>
    )
}

export default CodeEditor

interface ICodeEditorLayoutProps {
    className?: string
    children: ReactNode[]
}

export const CodeEditorLayout = ({
    className,
    children,
}: ICodeEditorLayoutProps) => {
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
