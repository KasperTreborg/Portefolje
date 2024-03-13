import React, { useEffect, useRef } from 'react';

import NavBar from '/src/Components/NavBar'
import ProjectList from '/src/Components/ProjectList'
import LanguageList from '/src/Components/LanguageList'

export default function Home() {

    const slashRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    if (slashRef.current) slashRef.current.classList.add('test-arrow-fade');
                } else {
                    entry.target.classList.remove('fade-in');
                    if (slashRef.current) slashRef.current.classList.remove('test-arrow-fade');
                }
            });
        });

        const hiddenElements = document.querySelectorAll('#fadeIn');
        hiddenElements.forEach((el) => observer.observe(el));
    });

    return (
        <div className="relative text-zinc-200">
            <NavBar />
            <div id="home" className='lg:scaling-home'>
                <div id="mainContent" className="pt-20 md:pt-32 lg:pt-40 flex flex-col xl:flex-row xl:items-start flex-wrap xl:justify-between mx-auto p-6 lg:px-20 xl:px-36 font-RaleWay">

                    <div id="nameAndIntro" className="flex flex-col">
                        <span className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl pb-6 text-left font-Playfair">I'm Kasper Treborg</span>
                        <span className="yep p-1 md:pt-2 lg:text-lg 2xl:text-2xl">Currently getting my bachelors in Informatics-Mathematics-Economics at UiB!</span>
                        <span className="yep p-1 md:pt-2 lg:text-lg 2xl:text-2xl">After my degree I would like to work as a frontend- or fullstack developer.</span>
                        <span className="yep p-1 md:pt-2 lg:text-lg 2xl:text-2xl pb-20 xl:pb-10 ">If you'd like to get in contact with me, click the contact button up top!</span>

                        <span className="hidden text-sm p-1 md:pt-4 md:text-2xl xl:block xl:text-lg 2xl:text-2xl">Check out some of my projects on the right &#8594;</span>
                    </div>

                    <ProjectList />

                </div>
                <span ref={slashRef} className='hidden pt-32 text-xl xl:text-3xl lg:pt-40 xl:pt-60 2xl:pt-40 lg:flex p-6 lg:px-20 xl:px-36 font-RaleWay animate-jump'>\ /</span>
            </div>

            <div id="about" className="pt-20 md:pt-20 pb-40 lg:pt-56 flex flex-col xl:flex-row xl:items-start flex-wrap xl:justify-between mx-auto p-6 lg:px-20 xl:px-36 font-RaleWay">

                <div id="background" className="flex flex-col">
                    <h2 id="fadeIn" className="text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl pb-6 text-left font-Playfair">Background</h2>
                    <p id="fadeIn" className="yep md:pt-2 md:text-lg lg:text-xl 2xl:text-2xl">
                    I am a 22 year old student at the University of Bergen. <br className='hidden md:block'/>
                    I have a passion for programming and web development! <br className='hidden md:block'/>
                    I am currently looking for internships and job opportunities in the field. <br className='hidden md:block'/>
                    I am always looking to expand my knowledge and skillset. <br className='hidden md:block'/>
                    </p>
                </div>

                <div className='flex flex-col md:text-xl xl:text-2xl 2xl:text-4xl h-64 2xl:h-80 w-60 center'>
                    <LanguageList />
                </div>
                
            </div>
        </div>
    )
}
