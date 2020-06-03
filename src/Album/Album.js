import React from 'react';
import './Album.css';
const album = (props) => {
    return (
        <div onClick={props.click} className="Album"><p> Album named {props.name} created by
        {props.author}</p>
        </div>
    )
}

export default album;