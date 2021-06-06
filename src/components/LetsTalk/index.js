import React, { useRef, useEffect } from 'react';
import Section from '../common/Section';
import TitleHeader from '../common/TitleHeader';
import lottieWeb from 'lottie-web';
import SocialMedia from './SocialMedia';

const LetsTalk = () => {
    const lottieRef = useRef(null);
    useEffect(() => {
        lottieWeb.loadAnimation({
            container: lottieRef.current, // required
            path: '/work-at-home.json', // required
            renderer: 'svg', // required
            loop: true, // optional
            autoplay: true, // optional
            name: "animation", // optional
        });
    }, []);
    return (
        <Section id="lets-talk-section">
            <TitleHeader title="Hablemos" subTitle="Siempre estoy dispuesto a ayudar y a aprender en el proceso." />
           <SocialMedia />
            <div ref={lottieRef} />
        </Section>
    )
}

export default LetsTalk