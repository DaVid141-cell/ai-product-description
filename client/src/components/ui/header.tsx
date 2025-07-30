import { Link, Search } from 'lucide-react';
import AppLogo from '../app-logo'
import NavItems from '../nav-items';
import { Input } from './input';
import { Button } from './button';

export function Header() {
    return (
        <header className="border-3 flex justify-around items-center bg-background">
            <div>
            <AppLogo className="m-2 size-12 font-bold" />
            </div>
            <NavItems/>
             <div className="relative w-full max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                    type="text"
                    placeholder="Search..."
                    className="pl-10" 
                />
            </div>
            <div className="flex items-center gap-2">
                <Button asChild size="lg" className=" sm:flex">
                    <a href='/'>Login</a>
                </Button>
                <Button asChild size="lg" className="hidden sm:flex">
                    <a href='/'>Register</a>
                </Button>
            </div>
        </header>
    );
}