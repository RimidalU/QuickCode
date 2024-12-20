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
                'w-fit border text-xl font-bold rounded-md px-3 py-1.5 bg-slate-100 dark:bg-neutral-900 dark:text-neutral-400  hover:border-active',
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
