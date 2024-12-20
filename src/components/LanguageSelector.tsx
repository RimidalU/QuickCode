import clsx from 'clsx'

import { LanguageInfo } from '@/models/common.model'

interface IDropdownProps {
    options: LanguageInfo[]
    onChange: (selectedLanguage: string) => void
    selectedLanguage: string
    className?: string
}

const LanguageSelector = ({
    options,
    onChange,
    selectedLanguage,
    className,
}: IDropdownProps) => {
    return (
        <select
            value={selectedLanguage}
            onChange={(e) => onChange(e.target.value)}
            className={clsx(
                'w-fit bg-white border text-xl font-bold rounded-md focus:outline-none focus:ring px-3 py-1.5 dark:bg-neutral-900 dark:text-neutral-400',
                className
            )}
        >
            {options.map((option) => (
                <option
                    key={`${option.language}${option.version}`}
                    value={option.language}
                >
                    {`${option.language}   v.${option.version}`}
                </option>
            ))}
        </select>
    )
}

export default LanguageSelector
