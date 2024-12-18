import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full overflow-hidden text-center backdrop-blur-[6px]">
            <Link
                href="https://github.com/RimidalU"
                className="link"
                target="_blank"
            >
                RimidalU &copy; 2024
            </Link>
        </footer>
    )
}

export default Footer
