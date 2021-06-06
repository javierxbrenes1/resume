import React from 'react';
import {VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimeLineElement from './TImeLineElement';

const workExperience = [
    {
        date: '2020-actualmente', 
        jobTitle: 'Desarrollador FrontEnd Avanzado', 
        companyName: 'Growth Acceleration Partners / Zenbusiness', 
        achievements: [
            'Aplicar mejoras en aplicaciones existentes',
            'Mantener comunicación con los equipos Backend, y diseñadores',
            'Participación activa en ceremonias de SCRUM',
            'Estimación de tickets'
        ]
    },
    {
        date: '2019-2020', 
        jobTitle: 'Desarrollador FullStack Avanzado', 
        companyName: 'Growth Acceleration Partners / Abrigo', 
        achievements: [
            'Aplicar mejoras a aplicaciones existentes',
            'Uso de Patrones como repositorio',
            'Utilización de Frameworks como MVC, EF',
            'Proveer estimaciones de trabajo',
            'Ayudar al cliente en la identificación y análisis de requerimientos',
            'Corrección de errores en aplicaciones',
            'Asegurarse de la calidad del software mediante pruebas unitarias',
            'Mantener comunicación constante con el equipo y con el cliente',
            'Participación activa en las ceremonias de SCRUM'
        ]
    },
    {
        date: '2018-2019', 
        jobTitle: 'Desarrollador web', 
        companyName: 'Universidad Latina', 
        achievements: [
            'Reescritura de Servicios SOAP y aplicaciones de Escritorio a aplicaciones basadas en tecnología Web',
            'Brindar soporte a aplicaciones ASP.net'
        ]
    },
    {
        date: '2015-2018', 
        jobTitle: 'Programador', 
        companyName: 'Architect Techonology Solutions', 
        achievements: [
            'Mantenimiento a aplicaciones de escritorio',
            'Creación y mantenimiento de scripts SQL, jobs y procesos almacenados',
            'Participación en el diseño y desarrollo de nuevos proyectos utilizando Web Apis, WCF, MVC'
        ]
    }
]

const TimeLine = () => {
    return (
    <VerticalTimeline>
        {workExperience.map(({date, jobTitle, companyName, achievements}, i) => {
            return <TimeLineElement date={date} jobTitle={jobTitle} companyName={companyName} achievements={achievements} index={i} key={i}  />
        })}
    </VerticalTimeline>);
}

export default TimeLine;
