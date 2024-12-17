enum SectionTitles {
    CodeEditor = 'Language',
    Result = 'Output',
}

const LANGUAGES = ['javascript', 'python', 'java', 'typescript', 'php']
type LanguageKeys = (typeof LANGUAGES)[number]

export { SectionTitles, LANGUAGES }
export type { LanguageKeys }
