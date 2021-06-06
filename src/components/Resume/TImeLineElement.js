import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';


const iconStyle = (index) =>  ({
    background: index % 2 === 0 ? '#0F766E' : '#0D9488',
    color: '#fff',
    textAlign: 'center',
    fontSize: 34,
    paddingTop: 12,
});

const TimeLineElement = ({ date, jobTitle, companyName, achievements, index }) => {
   return ( 
   <VerticalTimelineElement
            className=""
            contentStyle={{ background: '#fff', color: '#285e61', borderTop: '3px solid #134E4A' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date={date}
            iconStyle={iconStyle(index)}
            icon={<span className="jam jam-computer" />}
        >
            <h3 style={{margin: 0}}>{jobTitle}</h3>
            <h4 style={{color: '#0D9488'}}>{companyName}</h4>
            <div>
                <ul className="list-disc">
                    {achievements.map((r, i) => {
                        return <li className="m-0" key={i}>{r}</li>
                    })}
                </ul>
            </div>
        </VerticalTimelineElement>);
}

export default TimeLineElement;
