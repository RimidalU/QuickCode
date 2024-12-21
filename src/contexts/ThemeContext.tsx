'use client'

import React, { createContext, useState, useContext } from 'react'

import {
    NO_CONTEXT_ERROR,
    ThemeContextType,
    ThemeProviderProps,
    ThemeType,
} from '@/models/theme.model'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState(ThemeType.DARK)

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === ThemeType.DARK ? ThemeType.LIGHT : ThemeType.DARK
        )
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)

    if (!context) {
        throw new Error(NO_CONTEXT_ERROR)
    }
    return context
}
