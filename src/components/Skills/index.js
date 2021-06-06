import React from 'react';
import TitleHeader from '../common/TitleHeader';
import Section from '../common/Section';
import TechCards from './TechCards';
import ScrollAnimation from 'react-animate-on-scroll';

const Skills = () => {
    return (
        <Section id="skills-section" className="h-1/2">
            <TitleHeader title="Habilidades y Herramientas" subTitle="Algunas tecnologías y herramientas que he usado 😉" />
            <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'>
                <TechCards />
            </ScrollAnimation>
        </Section>
    )
}

export default Skills;
