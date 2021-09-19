import React from 'react';
import '../App.css';

export default function Follower(props){
    return(<div className='follower-container'>
        <img src={props.follower.avatar_url} alt='' />
        <p>
            <span>
                <a href={props.follower.html_url}>{props.follower.login}</a>
            </span>
        </p>
    </div>);
}