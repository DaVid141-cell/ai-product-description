import Footer from "../footer"
import { Header } from "../ui/header"

export default function HomeLayout({ children }) {
    return (
        <>
            <Header/>
                <main>
                    { children }
                </main>
            <Footer/>
        </>
    )
}