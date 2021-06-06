import React from 'react';
import TitleHeader from '../common/TitleHeader';
import TimeLine from './TimeLine';
import Section from '../common/Section';

const Resume = () => {
    return (
        <Section id="resume-section">
            <TitleHeader title="Mi Experiencia" />
            <TimeLine />
       </Section>
    )
}
export default Resume;