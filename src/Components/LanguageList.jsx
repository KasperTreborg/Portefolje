import React from 'react'
import '/src/Index.css'

const LanguageList = () => {
    const languages = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Haskell', 'PHP', 'SQL'];

    return (
        <>
            <span className='pt-20 py-2 xl:pl-4 xl:py-6 2xl:py-4 text-3xl xl:text-4xl 2xl:text-5xl border-b-2'>Skills:</span>
            <div className="flex flex-col overflow-auto justify-start h-full xl:p-2 2xl:p-4 w-64">
                {languages.map((language, index) => (
                    <div key={index} className="language">
                        {language}
                    </div>
                ))}
                {languages.map((language, index) => (
                    <div key={index + languages.length} className="language">
                        {language}
                    </div>
                ))}
            </div>
        </>
    );
};

export default LanguageList;