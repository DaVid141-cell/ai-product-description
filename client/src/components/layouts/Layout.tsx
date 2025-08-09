import Footer from "../footer";
import { Header } from "../ui/header";


export default function Layout({ children }) {
    return (
        <>
            {/* Site Layout */}
            <main className="">
                { children }
            </main>
        </>
    );
};
