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

const FILTER_DATA = ['javascript', 'python2', 'java', 'bash']

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
    const [favoriteLanguages, setFavoriteLanguages] = useState<LanguageInfo[]>([
        DEFAULT_LANGUAGES[0],
    ])

    const fetchLanguages = useCallback(async () => {
        const availableLanguages: LanguageInfo[] =
            await fetchAvailableLanguages()

        const filteredLanguages = getCheckedLanguages(
            availableLanguages,
            FILTER_DATA
        )
        setFavoriteLanguages(filteredLanguages)
    }, [])

    useEffect(() => {
        fetchLanguages()
    }, [])

    console.log(favoriteLanguages)

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
