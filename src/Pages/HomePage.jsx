import React, { useEffect, useRef } from 'react';

import NavBar from '/src/Components/NavBar'
import ProjectList from '/src/Components/ProjectList'

export default function Home() {

    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const para1Ref = useRef(null);
    const para2Ref = useRef(null);
    const para3Ref = useRef(null);
    const para4Ref = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
            });
        },
        {
            threshold: 0.1
        }
        );
        observer.observe(aboutRef.current);
        observer.observe(contactRef.current);
        observer.observe(para1Ref.current);
        observer.observe(para2Ref.current);
        observer.observe(para3Ref.current);
        observer.observe(para4Ref.current);

        return () => {
        observer.disconnect();
        };
    }, []);

    return (
        <div className="relative text-zinc-200">
            <div id='top' />
            <NavBar />
            <div id="home" className="h-screen">
            <div id="mainContent" className="pt-40 flex flex-col xl:flex-row xl:items-start flex-wrap xl:justify-between mx-auto p-6 md:px-20 xl:px-36 font-RaleWay">

                    <div id="nameAndIntro" className="flex flex-col">
                        <span className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl pb-6 text-left font-Playfair">I'm Kasper Treborg</span>
                        <span className="text-sm p-1 md:pt-2 lg:text-lg 2xl:text-2xl">Currently getting my bachelors in Informatics-Mathematics-Economics at UiB!</span>
                        <span className="text-sm p-1 md:pt-2 lg:text-lg 2xl:text-2xl">After my degree I would like to work as a frontend- or fullstack developer.</span>
                        <span className="text-sm p-1 md:pt-2 lg:text-lg 2xl:text-2xl pb-20 xl:pb-10 ">If you'd like to get in contact with me, click the contact button up top!</span>

                        <span className="hidden text-sm p-1 md:pt-4 md:text-2xl xl:block xl:text-lg 2xl:text-2xl">Check out some of my projects on the right &#8594;</span>
                    </div>

                    <ProjectList />

                </div>
            </div>

            <div id="about" className="px-36 pt-20 top-0 flex flex-col bg-zinc-800" style={{height: '95vh'}}>
                <h2 ref={aboutRef} className="text-8xl font-Playfair">Background</h2>
                <p ref={para1Ref} className="text-2xl pt-10">I am a 22 year old student at the University of Bergen.</p>
                <p ref={para2Ref} className="text-2xl pt-2">I have a passion for programming and web development, and I am currently looking for internships and job opportunities in the field.</p>
                <p ref={para3Ref} className="text-2xl pt-2">I have experience with HTML, CSS, JavaScript, React, Node.js, PHP, MySQL, and more. I am also familiar with Python, C#, and Java.</p>
                <p ref={para4Ref} className="text-2xl pt-2">I am a quick learner and I am always looking to expand my knowledge and skillset.</p>
            </div>

            <div id="contact" className="px-36 pt-20 top-0 flex flex-col bg-zinc-700" style={{height: '95vh'}}>
                <h2 ref={contactRef} className="text-8xl font-Playfair">Contact</h2>
            </div>
        </div>
    )
}