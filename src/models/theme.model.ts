import { ReactNode } from 'react'

enum ThemeType {
    LIGHT = 'light',
    DARK = 'dark',
}

interface ThemeContextType {
    theme: ThemeType
    toggleTheme: () => void
}

interface ThemeProviderProps {
    children: ReactNode
}

const NO_CONTEXT_ERROR = 'useTheme must be used within a ThemeProvider'

export { ThemeType, NO_CONTEXT_ERROR }
export type { ThemeContextType, ThemeProviderProps }
