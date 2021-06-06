import React from 'react';

const Section = ({id, children, customClasses = ''}) => {
    return (<section id={id} className={`flex flex-col ${customClasses} text-teal-800 py-8 px-4 bg-transparent`}>{children}</section>)
}

export default Section;
