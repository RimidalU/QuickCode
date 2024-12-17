import clsx from 'clsx'
import SectionHeader from './SectionHeader'
import LanguageSelector from './LanguageSelector'
import CodeInput from './CodeInput'
import { SectionTitles } from '../models/common.model'

interface ICodeEditorProps {
    className?: string
}

const CodeEditor = ({ className }: ICodeEditorProps) => {
    return (
        <section className={clsx('flex flex-col w-1/2 h-full', className)}>
            <SectionHeader title={SectionTitles.CodeEditor} />
            <LanguageSelector />
            <CodeInput />
        </section>
    )
}

export default CodeEditor
