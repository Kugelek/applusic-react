import React, { useState, useEffect } from 'react';
import './css/style.css';
import Album from './Album/Album';
import axios from 'axios';


const App = (props) => {

  const [data, setData] = useState({ entry: [] });

  useEffect(async () => {
    const fetchApi = async () => {
      const result = await axios(
        'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
      );
      console.log(result.data.feed.entry);
      setData(result.data.feed);
    }
    fetchApi();
  }, []);


  return (
    <section className="App albums">
      {
        data.entry.map((album, index) => {
          return <Album
            name={album['im:name'].label}
            image={album['im:image'][2].label}
            count={album['im:itemCount'].label}
            price={album['im:price'].label}
            contentType={album['im:contentType']['im:contentType'].attributes.label}
            title={album.title.label}
            linkSong={album.link.attributes.href}
            artist={album['im:artist'].label}
            linkGenre={album.category.attributes.scheme}
            releaseDate={album['im:releaseDate'].attributes.label}
          />
        })
      }

    </section >
  );

}

export default App;


