import React, { SyntheticEvent } from "react"
import { Musician } from "./models"
export default function AddMusician() {
  const [dataToUpload, setDataToUpload] = React.useState<Musician>({name: "", genre: "", date: "", img: ""});

  //functions
  function addValueFromInput(evt:React.FormEvent<HTMLInputElement>):void {
    evt.stopPropagation();
    // const newMusician:Musician = {name: "", genre: "", date: "", img: ""};
    // localStorage.setItem("musician", JSON.stringify({...newMusician, [evt.currentTarget.name]: evt.currentTarget.value}));
    // console.log(evt.currentTarget.name)
    // const nameToUpdate:string = evt.currentTarget.name; 
    setDataToUpload({...dataToUpload, [evt.currentTarget.name]: evt.currentTarget.value});
  }

  function addDataFromForm() {
    console.log('yes');
    // evt.preventDefault();

    // const stringFromObject:string = JSON.stringify(dataToUpload);
    // console.log(stringFromObject);
    // return stringFromObject; 
  }

  return (
    <section className="add-musician">
      <div className="container">
        <h3>Добавить музыканта</h3>
        <form>
          <input name="name"></input>
          <input name="genre"></input>
          <button type="submit">Добавить музыканта</button>
        </form>
      </div>
    </section>
  )
}