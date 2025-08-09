import {Link} from 'react-router-dom';

export default function NavItems (){
    return(
        <nav>
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="hover:underline">Home</Link>
                    </li>
                <li>
                    <Link to="/about" className="hover:underline">About</Link>
                    </li>
                <li>
                    <Link to="/dashboard" className="hover:underline">AI-Generator</Link>
                </li>
                <li>
                    <Link to="/dashboard" className="hover:underline">Products</Link>
                </li>
                <li>
                    <Link to="/dashboard" className="hover:underline">Categories</Link>
                </li>
            </ul>
        </nav>
        
    )
}