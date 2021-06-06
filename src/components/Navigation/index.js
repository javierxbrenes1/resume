import React from 'react';
import { Link as ScrollLink } from "react-scroll"

const offset = 0;
const duration = 1000;
const activeClass="active";

const LinkHelper = ({to, children}) => {
    return <ScrollLink to={to} offset={offset} duration={duration}
    smooth={true} activeClass={activeClass} className="cursor-pointer">
        {children}
    </ScrollLink>
}

const Li = ({children}) => {
    return <li className="py-4 text-3xl text-teal-800">{ children }</li>
}

const Navigation = () => {
    
    return (
    <nav className="w-full sm:w-1/6 md:w-1/6 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
        <ul className="fixed my-5">
            <Li><LinkHelper to="about-me" >Acerca de mi</LinkHelper></Li>
            <Li><LinkHelper to="resume-section">Experiencia</LinkHelper></Li>
            <Li><LinkHelper to="skills-section">Habilidades</LinkHelper></Li>
            <Li><LinkHelper to="lets-talk-section">Hablemos</LinkHelper></Li>
            <Li><a>Blog</a></Li>
        </ul>
    </nav>)
}

export default Navigation