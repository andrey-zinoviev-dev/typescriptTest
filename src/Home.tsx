import React from "react";
import MusicianProfile from "./Musician";
import { Musician } from "./models";
import { musicians } from "./utils";
import AddMusician from "./AddMusician";

export default function Home() {
  const [musiciansLoaded, setMusiciansLoaded] = React.useState<Musician[]>([]);

  React.useEffect(() => {
    // console.log(musicians);
    setMusiciansLoaded(musicians);
    console.log(localStorage.getItem("musician"))
  }, [])

  return (
    <>
      <section className="home">
        <div className="container">
          <h2>Что я люблю</h2>
          <ul className="home__ul">
            {musiciansLoaded.map((musicianLoaded) => {
              return <li className="home__ul-li" key={musicianLoaded.name}>
                <MusicianProfile musician={musicianLoaded} />
              </li>
            })}
          </ul>
        </div>
      </section>
      <AddMusician />
    </>

  )
}
