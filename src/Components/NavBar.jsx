
export default function NavBar() {
    return (
        <nav className="sticky top-0 flex flex-wrap items-center justify-between mx-auto p-6 pl-36 pr-36 font-RaleWay text-zinc-200 bg-zinc-900">

            <div className="flex space-x-2">
                <span className="text-2xl font-bold font-Playfair">Treborg.</span>
            </div>

            <div className="flex space-x-14 text-xl">
                <a href="#top" className="navbar-link">Home</a>
                <a href="#about" className="navbar-link">About</a>
                <a href="#contact" className="navbar-link">Contact</a>
            </div>

        </nav>
    )
}