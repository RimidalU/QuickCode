'use client'

import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'

import { DEFAULT_LANGUAGES, LanguageInfo } from '@/models/common.model'
import { LANGUAGES_SNIPPETS } from '@/models/editor.model'
import { fetchAvailableLanguages } from '@/services/piston.service'
import { getCheckedLanguages } from '@/utils/piston.service.utils'

const FILTER_DATA = [
    'javascript',
    'python2',
    'java',
    'typescript',
    'php',
    'bash',
]

interface EditorContextType {
    selectedLanguage: LanguageInfo
    value: string
    setSelectedLanguage: (value: LanguageInfo) => void
    setValue: (newValue: string) => void
    favoriteLanguages: LanguageInfo[]
}

const EditorContext = createContext<EditorContextType | undefined>(undefined)

export const EditorProvider = ({ children }: { children: ReactNode }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(
        DEFAULT_LANGUAGES[0]
    )
    const [value, setValue] = useState(LANGUAGES_SNIPPETS.javascript)
    const [favoriteLanguages, setFavoriteLanguages] =
        useState<LanguageInfo[]>(DEFAULT_LANGUAGES)

    const fetchLanguages = useCallback(async () => {
        const availableLanguages: LanguageInfo[] | undefined =
            await fetchAvailableLanguages()

        if (availableLanguages?.length) {
            const filteredLanguages = getCheckedLanguages(
                availableLanguages,
                FILTER_DATA
            )
            setFavoriteLanguages(filteredLanguages)
        }
    }, [])

    useEffect(() => {
        fetchLanguages()
    }, [])

    return (
        <EditorContext.Provider
            value={{
                selectedLanguage,
                value,
                setSelectedLanguage,
                setValue,
                favoriteLanguages,
            }}
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
