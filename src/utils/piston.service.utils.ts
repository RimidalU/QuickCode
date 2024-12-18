import { LanguageInfo } from '@/models/common.model'

const createExecuteCodeMethodBody = ({
    language,
    version,
    content,
}: {
    language: string
    version: string
    content: string
}) => ({
    language: language,
    version: version,
    files: [
        {
            content: content,
        },
    ],
})

const getCheckedLanguages = (
    availableLanguages: LanguageInfo[],
    languagesToFilter: string[]
): LanguageInfo[] =>
    availableLanguages.filter((item) =>
        languagesToFilter.includes(item.language)
    )

export { createExecuteCodeMethodBody, getCheckedLanguages }
