import React from 'react'
import Intro from '../Intro'
import AboutMe from '../AboutMe'
import Resume from '../Resume'
import Skills from '../Skills';
import LetsTalk from '../LetsTalk'


const Sections = () => {
    return (
        <div>
         {/* <div className="w-full sm:w-5/6 md:w-5/6"> */}
            <Intro />
            <div className="bg-gradient-to-b from-transparent via-gray-100 to-gray-200">
                <AboutMe />
                <Resume />
                <Skills />
                <LetsTalk />
            </div>
        </div>
    )
}

export default Sections;