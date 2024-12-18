import clsx from 'clsx'

const DEFAULT_MESSAGE = '// Select "Run Code" to check the results here.'

interface IOutputViewerProps {
    className?: string
    result: string | null
}
const OutputViewer = ({ result, className }: IOutputViewerProps) => {
    return (
        <div className={clsx('border flex-grow h-full', className)}>
            {result ? result : DEFAULT_MESSAGE}
        </div>
    )
}

export default OutputViewer
