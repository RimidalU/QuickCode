import clsx from 'clsx'

const DEFAULT_MESSAGE = '// Select "Run Code" to check the results here.'

interface IOutputViewerProps {
    className?: string
    result: string | null
    isLoading: boolean
    isErrorInCode: boolean
}
const OutputViewer = ({
    result,
    className,
    isLoading,
    isErrorInCode,
}: IOutputViewerProps) => {
    return (
        <div
            className={clsx(
                'border flex-grow h-full p-2 overflow-y-scroll no-scrollbar',
                {
                    'border-red-500 text-red-500 border-2': isErrorInCode,
                    'flex flex-col justify-center items-center': isLoading,
                },
                className
            )}
        >
            {isLoading ? (
                <h2>Loading...</h2>
            ) : result ? (
                result
                    .split('\n')
                    .map((line, index) => <p key={index}>{line}</p>)
            ) : (
                DEFAULT_MESSAGE
            )}
        </div>
    )
}

export default OutputViewer
