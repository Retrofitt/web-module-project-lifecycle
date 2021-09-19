import React from 'react';
import '../App.css';

export default function Info(props){

    return(<div className='container'>
        <img src={props.avatar} alt='' />
        <div className='info-container'>
            <h1>{props.name}</h1>
            <p><span>Location</span> |  {props.location}</p>
            <p><span>Socials</span> |  @{props.twitter}</p>
            <p>
                <span>Github</span> |  
                <a href={props.url} className='a-span'> Retrofitt </a>
            </p>
        </div>
    </div>);
}
