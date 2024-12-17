import CodeEditor from '../components/CodeEditor'
import Footer from '../components/Footer'
import Result from '../components/Result'

export default function Home() {
    return (
        <div className="items-center justify-items-center h-screen">
            <main className="flex flex-col gap-8 items-center sm:items-start p-4 sm:p-8 sm:px-10 sm:flex-row w-full h-full">
                <CodeEditor />
                <Result />
            </main>
            <Footer />
        </div>
    )
}
