import NavBar from './Components/NavBar'

export default function Home() {
    return (
        <div className="relative text-zinc-200">
            <div className="sticky top-0 h-screen">
                <NavBar />
                <div id="mainContent" className="pt-40 flex flex-wrap justify-between mx-auto p-6 pl-36 pr-36 font-RaleWay">

                    <div id="nameAndIntro" className="flex flex-col">
                        <span className=" text-8xl pb-12 text-left font-Playfair">Kasper Treborg</span>
                        <span className="pt-4 text-2xl">Currently getting a bachelors in Informatics-Mathematics-Economics at UiB!</span>
                        <span className="pt-4 text-2xl">After my degree I would like to work as a frontend- or fullstack developer.</span>
                        <span className="pt-4 text-2xl pb-10">If you'd like to get in contact with me, click the contact button up top!</span>

                        <span className="pt-4 text-2xl">Check out some of my projects to the right &#8594;</span>

                    </div>

                    <div id="listOfProjects" className="">
                        <span className="text-5xl pb-20">Projects</span>
                        <ul>
                            <li className="p-4 py-8 text-3xl border-b-2 border-gray-500">Portfolio</li>
                            <li className="p-4 py-8 text-3xl border-b-2 border-gray-500">Sorting Visualizer</li>
                            <li className="p-4 py-8 text-3xl border-b-2 border-gray-500">Meta Heuristic</li>
                            <li className="p-4 py-8 text-3xl border-b-2 border-gray-500">Astro Adventure</li>
                        </ul>
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