import clsx from 'clsx'
import React from 'react'
import SectionHeader from './SectionHeader'
import Button from './Button'
import OutputViewer from './OutputViewer'
import { SectionTitles } from '../models/common.model'

interface IResultProps {
    className?: string
}

const Result = ({ className }: IResultProps) => {
    return (
        <section className={clsx('flex flex-col w-1/2 h-full', className)}>
            <SectionHeader title={SectionTitles.Result} />
            <Button />
            <OutputViewer />
        </section>
    )
}

export default Result
