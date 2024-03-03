
import NavBar from '/src/Components/NavBar'
import ProjectList from '/src/Components/ProjectList'

export default function Home() {

    return (
        <div className="relative text-zinc-200">
            <div id='top' />
            <NavBar />
            <div id="home" className="h-screen">
            <div id="mainContent" className="pt-40 flex flex-col xl:flex-row xl:items-start flex-wrap xl:justify-between mx-auto p-6 md:px-36 xl:px-36 font-RaleWay">

                    <div id="nameAndIntro" className="flex flex-col">
                        <span className="text-4xl md:text-6xl lg:text-7xl 2xl:text-8xl pb-6 text-left font-Playfair">I'm Kasper Treborg</span>
                        <span className="text-xs p-1 md:pt-4 lg:text-lg 2xl:text-2xl">Currently getting my bachelors in Informatics-Mathematics-Economics at UiB!</span>
                        <span className="text-xs p-1 md:pt-4 lg:text-lg 2xl:text-2xl">After my degree I would like to work as a frontend- or fullstack developer.</span>
                        <span className="text-xs p-1 md:pt-4 lg:text-lg 2xl:text-2xl pb-20 xl:pb-10 ">If you'd like to get in contact with me, click the contact button up top!</span>

                        <span className="hidden text-sm p-1 md:pt-4 md:text-2xl xl:block xl:text-lg 2xl:text-2xl">Check out some of my projects on the right &#8594;</span>
                    </div>

                    <ProjectList />

                </div>
            </div>

            {/* Scroll page: */}
            <div id="about" className="top-0 h-screen flex flex-col items-center justify-center">
                <h2 className="text-8xl font-Playfair text-">ABOUT</h2>
            </div>

            <div id="contact" className="top-0 h-screen flex flex-col items-center justify-center">
                <h2 className="text-8xl">CONTACT</h2>
            </div>
        </div>
    )
}