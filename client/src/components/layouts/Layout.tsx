import { Header } from "../ui/header";


export default function Layout({ children }) {
    return (
        <>
            {/* Toast Notification Component */}    
        <Header/>
            {/* Site Layout */}
            <main className="m-10">
                { children }
            </main>
        </>
    );
};
