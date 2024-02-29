import React, { useEffect } from 'react'

import NavBar from '/src/Components/NavBar'
import ProjectList from '/src/Components/ProjectList'

export default function Home() {

    return (
        <div className="relative text-zinc-200">
            <div className="sticky top-0 h-screen">
                <NavBar />
                <div id="mainContent" className="pt-40 flex flex-wrap justify-between mx-auto p-6 pl-36 pr-36 font-RaleWay">

                    <div id="nameAndIntro" className="flex flex-col">
                        <span className="text-8xl pb-12 text-left font-Playfair">I'm Kasper Treborg</span>
                        <span className="pt-4 text-2xl">Currently getting my bachelors in Informatics-Mathematics-Economics at UiB!</span>
                        <span className="pt-4 text-2xl">After my degree I would like to work as a frontend- or fullstack developer.</span>
                        <span className="pt-4 text-2xl pb-10">If you'd like to get in contact with me, click the contact button up top!</span>

                        <span className="pt-4 text-2xl">Check out some of my projects on the right &#8594;</span>

                    </div>

                    <ProjectList />

                </div>
            </div>

            {/* Scroll page: */}
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-indigo-600 text-white">
                <h2 className="text-8xl">SNORRENERD</h2>
            </div>
        </div>
    )
}