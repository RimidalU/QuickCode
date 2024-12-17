'use client'

import clsx from 'clsx'
import React from 'react'

import { SectionTitles } from '../models/common.model'

import SectionHeader from './SectionHeader'
import Button from './Button'
import OutputViewer from './OutputViewer'

interface IResultProps {
    className?: string
}

const Result = ({ className }: IResultProps) => {
    return (
        <section
            className={clsx('flex flex-col gap-2 w-1/2 h-full', className)}
        >
            <SectionHeader title={SectionTitles.Result} />
            <Button onClick={() => console.log('Click!')}>Run Code</Button>
            <OutputViewer />
        </section>
    )
}

export default Result
