import axios from "axios";
import React, { useState, useEffect } from "react";

function EffectHook2() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(0);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div style={{ color: "white" }}>
      <input
        type="text"
        id="myInput"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <label htmlFor="myInput">Enter id: </label>
      <button onClick={handleClick} style={{ background: "green" }}>
        Fetch post!
      </button>
      <li>{post.title}</li>
    </div>
  );
}

export default EffectHook2;
