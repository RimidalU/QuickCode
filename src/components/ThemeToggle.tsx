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
                'flex items-center p-2 rounded-full  hover:bg-yellow-500 ',
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
