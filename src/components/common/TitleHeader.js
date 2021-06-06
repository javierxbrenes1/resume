import React from 'react';

const TitleHeader = ({title, subTitle}) => {
    return (
    <div className="pb-8">
        <h1 className="text-5xl m-0">{title}</h1>
        {subTitle && <p className="text-sm color-gray-700 mt-3">{subTitle}</p>}
    </div>);
}

export default TitleHeader;
