import React from 'react';
import javier from '../../images/javier.jpeg';
import TitleHeader from '../common/TitleHeader';
import Section from '../common/Section';

const calculateAge = () => {
    const birthDay = new Date('1994-09-17 00:25')
    const diffMs = Date.now() - birthDay.getTime()
    var ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
}

const AboutMe = () => {
    return (
    <Section id="about-me">
        <div className="flex flex-col">
            <TitleHeader title="Acerca de mi" />
            <div className="flex items-center md:items-start justify-between flex-col md:flex-row">
                <div style={{minWidth:'10rem'}}>
                    <img src={javier} alt="javier-brenes" className="rounded-full w-full h-full" />
                </div>
                <div className="text-1xl md:text-2xl leading-loose px-10 text-justify">
                    Mi nombre es Javier Brenes, tengo {calculateAge()} años, Actualmente recido en Cartago, Costa Rica.<br />
                    Cursé mis estudios universitarios en la Universidad Latina de Costa Rica donde obtuve el grado de bachiller en Ingeniería de Sistemas Informáticos, desde entonces me he desempeñado como desarrollador de software.
                    He tenido la oportunidad de trabajar para empresas costarricenses y en los últimos años he trabajado para empresas norteamericanas.
                    Algunos de mis pasatiempos: escribir código, aprender nuevas tecnologías y pasar tiempo en familia.
                </div>
            </div>
        </div>
        
    </Section>)
}

export default AboutMe