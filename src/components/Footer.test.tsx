import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Footer from './Footer'

describe('Footer', () => {
    it('renders the footer with the correct text', () => {
        render(<Footer />)
        const linkElement = screen.getByText(/RimidalU © 2024/i)
        expect(linkElement).toBeInTheDocument()
    })

    it('has the correct link to GitHub', () => {
        render(<Footer />)
        const linkElement = screen.getByRole('link', {
            name: /RimidalU © 2024/i,
        })
        expect(linkElement).toHaveAttribute(
            'href',
            'https://github.com/RimidalU'
        )
    })

    it('has the correct CSS classes', () => {
        render(<Footer />)
        const footerElement = screen.getByRole('contentinfo')
        expect(footerElement).toHaveClass(
            'fixed bottom-0 w-full overflow-hidden text-center backdrop-blur-[6px]'
        )
    })

    it('opens the link in a new tab', () => {
        render(<Footer />)
        const linkElement = screen.getByRole('link', {
            name: /RimidalU © 2024/i,
        })
        expect(linkElement).toHaveAttribute('target', '_blank')
    })
})
