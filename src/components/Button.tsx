import clsx from 'clsx'

interface IButtonProps {
    children: React.ReactNode
    onClick: () => void
    disabled?: boolean
    className?: string
}
const Button = ({
    className,
    onClick,
    disabled = false,
    children,
}: IButtonProps) => {
    return (
        <button
            className={clsx(
                'font-bold border text-xl px-3 py-1 rounded-md flex flex-row items-center gap-2 w-32 hover:border-active',
                className
            )}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
