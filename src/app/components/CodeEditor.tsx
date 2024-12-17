import clsx from 'clsx'
import SectionHeader from './SectionHeader'
import LanguageSelector from './LanguageSelector'
import CodeInput from './CodeInput'

interface ICodeEditorProps {
    className?: string
}

const CodeEditor = ({ className }: ICodeEditorProps) => {
    return (
        <section className={clsx('flex flex-col w-1/2', className)}>
            <SectionHeader />
            <LanguageSelector />
            <CodeInput />
        </section>
    )
}

export default CodeEditor
