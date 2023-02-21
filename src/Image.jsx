import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

function Image() {
  const [imageSlider, setImageSlider] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const URL = "https://picsum.photos/200";

      fetch(URL).then((data) => setImageSlider(data));
    };
    const interval = setInterval(() => fetchdata(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={imageSlider.url} alt="nada" />
    </div>
  );
}

export default Image;
