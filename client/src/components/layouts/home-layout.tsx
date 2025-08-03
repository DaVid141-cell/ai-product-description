import { Header } from "../ui/header"

export default function HomeLayout({ children }) {
    return (
        <>
            <Header/>
                <main>
                    { children }
                </main>
        </>
    )
}