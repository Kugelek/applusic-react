import React from 'react';
import './album.css';
const album = (props) => {
    return (
        <div onClick={props.click} className="album">
            <div className="album__name">
                {props.name}
            </div>
            <img className="album__img" src={props.image} alt="Artist logo"></img>
            <p> Album named  created by
            {props.author}</p>
            <div className="album__count">
                {props.count}
            </div>
            <div className="album__price">
                {props.price}
            </div>
            <div className="album__type">
                {props.contentType}
            </div>
            <div className="album__rights">
                {props.rights}
            </div>
            <div className="album__title">
                {props.title}
            </div>
            <a className="album__link--song" href={props.linkSong}>test</a>
            <a className="album__link--genre" href={props.linkGenre}>test</a>
            <div className="album__artist">
                {props.artist}
            </div>
            <div className="album__release-date">
                {props.releaseDate}
            </div>




        </div >
    )
}

export default album;