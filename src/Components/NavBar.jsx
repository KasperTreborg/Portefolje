import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="flex flex-wrap items-center justify-between mx-auto p-6 pl-12 pr-12 font-RaleWay">

            <div className="flex space-x-2">
                <Link to="/">
                    <span className="text-2xl">Kasper Treborg</span>
                </Link>
            </div>

            <div className="flex space-x-14 text-xl font-">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/test" className="navbar-link">About</Link>
                <Link to="/" className="navbar-link">Contact</Link>
            </div>

        </nav>
    )
}