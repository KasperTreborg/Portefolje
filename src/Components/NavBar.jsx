
export default function NavBar() {
    return (
        <nav className="sticky top-0 flex flex-wrap items-center justify-between md:mx-auto p-6 md:px-36 font-RaleWay text-zinc-200 bg-zinc-900">

            <div className="flex space-x-2">
                <span className="text-2xl font-bold font-Playfair">Treborg.</span>
            </div>

            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-200 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 hover:bg-gray-700" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>

            <div className="hidden md:flex space-x-14 text-xl">
                <a href="#top" className="navbar-link">Home</a>
                <a href="#about" className="navbar-link">About</a>
                <a href="#contact" className="navbar-link">Contact</a>
            </div>

        </nav>
    )
}