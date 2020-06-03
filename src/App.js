import React, { useState } from 'react';
import './App.css';
import Album from './Album/Album';

const App = props => {

  const [albumsState, setAlbumsState] = useState({
    albums: [
      { id: 'asfas', name: 'test1', author: 'test2' },
      { id: 'xxxa', name: 'test2', author: 'test2213' },
      { id: 'ggfd', name: 'test3', author: 'test2213' }
    ],
  });


  let albums = null;
  albums = (
    < div >
      {albumsState.albums.map((album, index) => {
        return <Album
          name={album.name}
          author={album.author}
          key={album.id}
        />
      })}

    </div >
  );


  return (
    <div className="App">
      <h1>testing</h1>
      {albums}
    </div >
  );
}

export default App;


