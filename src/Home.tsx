import React from "react";
import MusicianProfile from "./Musician";
import { Musician } from "./models";
// import { musicians } from "./utils";
import AddMusician from "./AddMusician";
import { musicians } from "./utils";
import { useAppDispatch } from './hooks/hooks'
// import { startLogin } from "./features/loginSlice";
// import { loginSlice } from "./features/loginSlice";
import { loadUser } from "./features/userSlice";

export default function Home() {
  const [musiciansLoaded, setMusiciansLoaded] = React.useState<Musician[]>([]);
  const [addMusicianClicked, setAddMusicianClicked] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    // setMusiciansLoaded(musicians);
    const musiciansToRender:(string | null) = localStorage.getItem('musicians');
    musiciansToRender ? setMusiciansLoaded(JSON.parse(musiciansToRender)) : setMusiciansLoaded(musicians);
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
          <button onClick={():void => {
            setAddMusicianClicked((prevValue):boolean => {
              return !prevValue;
            })
          }}>{addMusicianClicked ? "-" : "+"}</button>
          <button onClick={() => {
            dispatch(loadUser({
              _id: "123",
              name: "Dris",
              email: "@mail.com",
            }))
          }}>войти</button>
        </div>
      </section>
      {addMusicianClicked && <AddMusician setMusiciansLoaded={setMusiciansLoaded} />}
    </>

  )
}
