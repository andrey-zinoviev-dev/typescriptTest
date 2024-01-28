import React from "react"
import { Musician } from "./models"
// import Billy from "./assets/billy.jpeg";
//porps interface
interface AddMusicianProps {
  setMusiciansLoaded: React.Dispatch<React.SetStateAction<Musician[]>>
}

export default function AddMusician({setMusiciansLoaded}: AddMusicianProps) {
  const [dataToUpload, setDataToUpload] = React.useState<Musician>({name: "", genre: "", date: "", img: ""});

  //functions
  function showInputName(evt:React.FormEvent<HTMLInputElement>):void { 

    setDataToUpload({...dataToUpload, [evt.currentTarget.name]: evt.currentTarget.value});
  }

  function submitForm(evt:React.FormEvent<HTMLFormElement>):void {
    evt.preventDefault();
    evt.currentTarget.reset();
    setMusiciansLoaded((prevValue):Musician[] => {
      localStorage.setItem("musicians", JSON.stringify([...prevValue, dataToUpload]));
      return [...prevValue, dataToUpload]
    })
    // localStorage.setItem("musicians", JSON.stringify())
  }

  return (
    <section className="add-musician">
      <div className="container">
        <h3>Добавить музыканта</h3>
        <form onSubmit={submitForm}>
          <input name="name" required type="text" onChange={showInputName}></input>
          <input name="genre" required type="text" onChange={showInputName}></input>
          <input name="date" required type="text" onChange={showInputName}></input>
          <input name="img" required type="text" onChange={showInputName}></input>
          <button>Добавить музыканта</button>
        </form>
      </div>
    </section>
  )
}