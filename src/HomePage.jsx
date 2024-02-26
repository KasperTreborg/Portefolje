import NavBar from './Components/NavBar'

export default function Home() {
    return (
        <div className="relative">
            <div className="sticky top-0 h-screen">
                <NavBar />
                <div id="mainContent" className="pt-40 flex flex-wrap items-center justify-between mx-auto p-6 pl-12 pr-12 font-RaleWay">

                    <div id="nameAndIntro" className="flex flex-col">
                        <span className="rainbow-text text-8xl text-center pb-3">Kasper Treborg</span>
                        <span className="pt-4 text-4xl">Welcome to my portfolio!</span>
                    </div>

                </div>
            </div>

            {/* Scroll page: */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
                <h2 className="text-4xl">The second title.</h2>
            </div>
        </div>
    )
}