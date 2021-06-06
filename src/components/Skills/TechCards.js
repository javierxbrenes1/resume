import React from 'react';
import dotnet from '../../images/dotnet.svg';
import js from '../../images/js.svg';
import css from '../../images/css.svg';

const techs = [
    {
        img: dotnet,
        tag: 'dotnet',
        values: [
            'ASP.net MVC',
            '.net core',
            'Entity Framework',
            'MSSQL Server'
        ]
    },
    {
        img: js,
        tag: 'dotnet',
        values: [
            'React.js',
            'Next.js',
            'Vue.js',
            'Node.js',
            'Strapi'
        ]
    },
    {
        img: css,
        tag: 'css',
        values: [
            'SASS',
            'Bootstrap',
            'Tailwinds',
            'MaterialUI'
        ]
    }
];

const TechCards = () => {
    return (
    <div className="flex justify-around flex-wrap">
        {techs.map(({img, tag, values}, i) => (
            <div key={i} className="w-full m-6 md:w-1/3 md:m-4 lg:w-1/4 bg-gradient-to-l from-teal-400 to-teal-500 rounded-2xl transform rotate-3 shadow-xl">
                <div key={i} className="bg-white flex items-center flex-col rounded-2xl h-full transform -rotate-3">
                    <img src={img} alt={tag} className="w-24 h-24 rounded-lg m-5"  />
                    <div className="w-full  flex flex-wrap justify-center py-4">
                        {values.map((v, j) => (<div className="min-w-max m-1 bg-teal-600 rounded-md text-white shadow-md py-1 px-2" key={j}>{v}</div>))}
                    </div>
                </div>
            </div>
        ))}
    </div>);
};

export default TechCards;
