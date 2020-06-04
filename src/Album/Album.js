import React from 'react';
import './../css/style.css';
const album = (props) => {
    return (
        <div onClick={props.click} className="album">
            <div class="album__basic-info">
                <figure>
                    <img className="album__img" src={props.image} alt="Artist logo"></img>
                </figure>
                <div className="album__description">
                    <h2 className="album__name">
                        {props.name}
                    </h2>
                    <div className="album__artist">
                        {props.contentType} by {props.artist}
                    </div>
                    <div className="album__release-date">
                        Release date: {props.releaseDate}
                    </div>
                    <div className="album__count">
                        Only {props.count} left
                    </div>
                    <div className="album__price">
                        Buy now for {props.price}
                    </div>
                    <div className="album__rights">
                        {props.rights}
                    </div>



                </div>
            </div>
            <div class="album__extended-info">
                <div className="album__title">
                    {props.title}
                </div>
                <a className="album__link--song" href={props.linkSong}>Listen to {props.name} at AppleMusic</a>
                <a className="album__link--genre" href={props.linkGenre}>Check out more in this genre!</a>
            </div>
        </div >
    )
}

export default album;