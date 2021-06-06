import React, {useState, } from 'react'
import Particles from 'react-tsparticles'
import particlesConfig from './particlesConfig'
import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

const delay = 1000
const Intro = () => {
    const [showTypist, setShowTypist] = useState(true)

    const onTypingDoneHandler = () => {
        setShowTypist(false)
        setTimeout(() => setShowTypist(true), delay + 200)
    }

    return (
    <section className="h-screen relative">
         <div className="leading-relaxed absolute md:top-1/4 left-20p font-sans text-6xl text-gray-200">
            <p>Hola, Soy Javier Brenes</p>
            <div className="text-3xl">
                {showTypist && 
                <Typist onTypingDone={onTypingDoneHandler} >
                    <span className="jam jam-computer" /> <a href="https://1x.engineer/" target="_blank" rel="noreferrer noopener">1x Fullstack developer </a>
                    <Typist.Delay ms={delay} />
                    <br />
                    <span className="jam jam-terminal" /> Javascript & .NET lover
                    <Typist.Delay ms={delay} />
                    <br /> 
                    <span className="jam jam-close" /> Straight Edge
                    <Typist.Delay ms={delay} />
                </Typist>}
            </div>
            
            
        </div>
        <Particles
        className="h-screen"
        style={{background: 'linear-gradient(180deg, rgba(35,78,82,1) 0%, rgba(40,94,97,1) 50%, rgba(44,122,123,1) 100%)'}}
        id="tsparticles"
        options={particlesConfig}
      />
       
    </section>)
}

export default Intro;