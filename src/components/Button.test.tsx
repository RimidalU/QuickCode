import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import Button from './Button'

const BUTTON_TEXT = 'Click Me'
describe('Button Component', () => {
    const mockOnClick = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('renders with children', () => {
        render(<Button onClick={mockOnClick}>Click Me</Button>)
        const linkElement = screen.getByText(BUTTON_TEXT)

        expect(linkElement).toBeInTheDocument()
    })

    it('calls onClick when clicked', () => {
        render(<Button onClick={mockOnClick}>{BUTTON_TEXT}</Button>)
        fireEvent.click(screen.getByText(BUTTON_TEXT))
        expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    it('is disabled when disabled prop is true', () => {
        render(
            <Button onClick={mockOnClick} disabled={true}>
                {BUTTON_TEXT}
            </Button>
        )
        const button = screen.getByText(BUTTON_TEXT)
        expect(button).toBeDisabled()

        fireEvent.click(button)
        expect(mockOnClick).not.toHaveBeenCalled()
    })

    it('applies custom className', () => {
        render(
            <Button onClick={mockOnClick} className="custom-class">
                Styled Button
            </Button>
        )
        const button = screen.getByText('Styled Button')
        expect(button).toHaveClass('custom-class')
    })
})
