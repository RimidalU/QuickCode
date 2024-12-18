import clsx from 'clsx'

interface IOutputViewerProps {
    className?: string
    result: string | null
}
const OutputViewer = ({ result, className }: IOutputViewerProps) => {
    return (
        <div className={clsx('border flex-grow h-full', className)}>
            {result
                ? result
                : '// Select "Run Code" to check the results here.'}
        </div>
    )
}

export default OutputViewer
