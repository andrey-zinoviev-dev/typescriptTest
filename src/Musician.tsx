import React from "react";
import { Musician} from "./models";
import "./Musician.css";

interface MusicianProps {
  musician: Musician
}

export default function MusicianProfile({musician}: MusicianProps) {
  const [clicked, setClicked] = React.useState(false);
  
  React.useEffect(() => {
    console.log(clicked);
  }, [clicked])

  return (
    <>
      <img className="home__ul-li-img" src={musician.img}></img>
      <h3 className="home__ul-li-h3">{musician.name}</h3>
      <div className="home__ul-li-wrapper">
        <span className="home__ul-li-span">{musician.genre}</span>
        <p className="home__ul-li-p">{musician.date}</p>
      </div>

      <button className="home__ul-li-btn" onClick={() => {
        setClicked((prevValue) => {
          return !prevValue;
        })
      }}>Открыть</button>
    </>
  )
}