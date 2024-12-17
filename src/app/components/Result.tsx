import clsx from 'clsx'
import React from 'react'
import SectionHeader from './SectionHeader'
import Button from './Button'
import OutputViewer from './OutputViewer'

interface IResultProps {
    className?: string
}

const Result = ({ className }: IResultProps) => {
    return (
        <section className={clsx('flex flex-col w-1/2', className)}>
            <SectionHeader />
            <Button />
            <OutputViewer />
        </section>
    )
}

export default Result
