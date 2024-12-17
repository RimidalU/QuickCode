import CodeEditor from '../components/CodeEditor'
import Footer from '../components/Footer'
import Result from '../components/Result'

export default function Home() {
    return (
        <div className="items-center justify-items-center min-h-screen pb-20 gap-16">
            <main className="flex flex-col gap-8 items-center sm:items-start p-16 sm:p-20 sm:flex-row">
                <CodeEditor />
                <Result />
            </main>
            <Footer />
        </div>
    )
}
