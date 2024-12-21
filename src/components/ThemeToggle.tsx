'use client'

import clsx from 'clsx'
import React from 'react'

import { useTheme } from '@/contexts/ThemeContext'

import Sun from './Sun'
import Moon from './Moon'

interface IThemeToggleProps {
    disabled?: boolean
    className?: string
}
const ThemeToggle = ({ className, disabled = false }: IThemeToggleProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            className={clsx(
                'absolute right-5 md:right-10 top-3 md:top-10 flex items-center p-2 rounded-full hover:bg-active dark:bg-neutral-400',
                className
            )}
            onClick={toggleTheme}
            disabled={disabled}
        >
            {theme === 'light' ? <Moon /> : <Sun />}
        </button>
    )
}

export default ThemeToggle
