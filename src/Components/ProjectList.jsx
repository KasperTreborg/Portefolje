
export default function ProjectList() {

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const hackerHover = (event) => {
        let iterations = 0;

        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split('')
                .map((letter, index) =>  {
                    if (index < iterations) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join('');
            
            if(iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }
            
            iterations += 5/6;
        }, 30);
    };
    return (
        <div className='flex flex-col'>
            <span className="text-5xl pb-6 font-RaleWay lightUpList">Projects :</span>
            <ul className="listOfProjects">
                <a href="https://github.com/KasperTreborg/portefolje" target="_blank">
                    <li onMouseOver={hackerHover} data-value="PORTFOLIO" className="py-6 text-3xl border-b-2 border-t-2 border-gray-500 hover:bg-zinc-800">
                        PORTFOLIO
                    </li>
                </a>
                <a href="https://github.com/KasperTreborg/sortingvisualizer" target="_blank">
                    <li onMouseOver={hackerHover} data-value="SORTING_VISUALIZER" className="py-6 text-3xl border-b-2 border-gray-500 hover:bg-zinc-800">
                        SORTING_VISUALIZER
                    </li>
                </a>
                <a href="https://github.com/KasperTreborg/INF273" target="_blank">
                    <li onMouseOver={hackerHover} data-value="META_HEURISTIC" className="py-6 text-3xl border-b-2 border-gray-500 hover:bg-zinc-800">
                        META_HEURISTIC
                    </li>
                </a>
                <a href="https://github.com/KasperTreborg/INF112-Spill" target="_blank">
                    <li onMouseOver={hackerHover} data-value="ASTRO_ADVENTURE" className="py-6 text-3xl border-b-2 border-gray-500 hover:bg-zinc-800">
                        ASTRO_ADVENTURE
                    </li>
                </a>
            </ul>
        </div>
    );
}