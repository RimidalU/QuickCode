import clsx from 'clsx'
import React from 'react'

interface ICodeEditorProps {
    title: string
    className?: string
}
const SectionHeader = ({ title, className }: ICodeEditorProps) => {
    return (
        <h2 className={clsx('text-2xl font-bold text-left', className)}>
            {title}
        </h2>
    )
}

export default SectionHeader
