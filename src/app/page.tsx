import CodeEditor from '../components/CodeEditor'
import Footer from '../components/Footer'
import Result from '../components/Result'

export default function Home() {
    return (
        <div className="items-center justify-items-center h-screen">
            <main className="flex flex-col gap-8 items-center md:items-start p-4 md:p-8 md:px-10 md:flex-row w-full max-w-screen-2xl h-full">
                <CodeEditor />
                <Result />
            </main>
            <Footer />
        </div>
    )
}
