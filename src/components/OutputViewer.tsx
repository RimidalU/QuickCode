import clsx from 'clsx'

const DEFAULT_MESSAGE = '// Select "Run Code" to check the results here.'

interface IOutputViewerProps {
    className?: string
    result: string | null
    isLoading: boolean
}
const OutputViewer = ({ result, className, isLoading }: IOutputViewerProps) => {
    if (isLoading) {
        return <h2 className="m-auto">Loading...</h2>
    }

    return (
        <div className={clsx('border flex-grow h-full', className)}>
            {result
                ? result
                      .split('\n')
                      .map((line, index) => <p key={index}>{line}</p>)
                : DEFAULT_MESSAGE}
        </div>
    )
}

export default OutputViewer
