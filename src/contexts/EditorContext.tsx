'use client'

import { createContext, ReactNode, useContext, useState } from 'react'

import { DEFAULT_LANGUAGES, LanguageInfo } from '@/models/common.model'
import { LANGUAGES_SNIPPETS } from '@/models/editor.model'

interface EditorContextType {
    selectedLanguage: LanguageInfo
    value: string
    setSelectedLanguage: (value: LanguageInfo) => void
    setValue: (newValue: string) => void
}

const EditorContext = createContext<EditorContextType | undefined>(undefined)

export const EditorProvider = ({ children }: { children: ReactNode }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(
        DEFAULT_LANGUAGES[0]
    )
    const [value, setValue] = useState(LANGUAGES_SNIPPETS[0])

    return (
        <EditorContext.Provider
            value={{ selectedLanguage, value, setSelectedLanguage, setValue }}
        >
            {children}
        </EditorContext.Provider>
    )
}

export const useEditor = () => {
    const context = useContext(EditorContext)
    if (!context) {
        throw new Error('useEditor must be used within an EditorProvider')
    }
    return context
}
