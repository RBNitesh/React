import React, { useState, useEffect } from "react";
import axios from "axios";

function EffectHook() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums`)
      .then((res) => {
        console.log(res);
        setAlbums(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ color: "white" }}>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default EffectHook;
