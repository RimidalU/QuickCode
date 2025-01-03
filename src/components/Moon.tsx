import clsx from 'clsx'

interface IMoonProps {
    className?: string
}

const Moon = ({ className }: IMoonProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx('w-7 h-7 text-gray-900', className)}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
    )
}

export default Moon
