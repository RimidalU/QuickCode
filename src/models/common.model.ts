enum SectionTitles {
    CodeEditor = 'Language',
    Result = 'Output',
}

interface LanguageInfo {
    language: string
    version: string
    aliases: string[]
    runtime?: string
}

const DEFAULT_LANGUAGES = [
    { language: 'javascript', version: '18.15.0', aliases: ['js'] },
    { language: 'python2', version: '2.7.18', aliases: ['python2'] },
    { language: 'java', version: '15.0.2', aliases: ['java'] },
    { language: 'typescript', version: '5.0.3', aliases: ['typescript'] },
    { language: 'php', version: '8.2.3', aliases: ['php'] },
]

export { SectionTitles, DEFAULT_LANGUAGES }
export type { LanguageInfo }
