enum SectionTitles {
    CodeEditor = 'Language',
    Result = 'Output',
}

interface LanguageInfo {
    language: string
    version: string
    aliases: string[]
}

const DEFAULT_LANGUAGES = [
    {
        language: 'javascript',
        version: '22.5.0',
        aliases: ['node-javascript', 'node-js', 'javascript', 'js'],
    },
    // { language: 'python', version: '22.5.0' },
    // { language: 'java', version: '22.5.0' },
    // { language: 'typescript', version: '22.5.0' },
    // { language: 'php', version: '22.5.0' },
]

// type LanguageKeys =  typeof LANGUAGES[number]['language']

export { SectionTitles, DEFAULT_LANGUAGES }
export type { LanguageInfo }
