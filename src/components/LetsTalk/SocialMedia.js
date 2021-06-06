import React from 'react';

const socialMedia = [
    {
        link: 'https://www.facebook.com/chorybrenes',
        fa: 'fab fa-facebook-square'
    },
    {
        link: 'https://github.com/javierxbrenes1',
        fa: 'fab fa-github-square'
    },
    {
        link: 'https://www.linkedin.com/in/javier-brenes-5975aa119/',
        fa: 'fab fa-linkedin'
    },
    {
        link: 'https://www.instagram.com/javier_edge/',
        fa: 'fab fa-instagram'
    },
    {
        link: 'https://wa.me/50670132185',
        fa: 'fab fa-whatsapp-square'
    }

    
];

const SocialMedia = () => {
    const media = socialMedia.map((el, i) =>{
        return (
                <a key={i} className="w-auto hover:text-teal-700" href={el.link} target="_blank"  rel="noreferrer noopener">
                    <i className={`${el.fa} text-5xl md:text-6xl transform hover:scale-125`}></i>
                </a>
        );
    });

    return (
    <div className="flex justify-around mb-5">
        {media}
    </div>);
};

export default SocialMedia;