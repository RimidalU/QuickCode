import clsx from 'clsx'

interface IDropdownProps {
    options: string[]
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
                'w-fit bg-white border text-xl font-bold rounded-md focus:outline-none focus:ring px-3 py-1.5',
                className
            )}
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

export default LanguageSelector
