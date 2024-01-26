import React from "react"
import { Musician } from "./models"
export default function AddMusician() {
  const [dataToUpload, setDataToUpload] = React.useState<Musician | object>({});

  React.useEffect(() => {
    console.log(dataToUpload);
  }, [dataToUpload])

  //functions
  function showInputName(evt:React.FormEvent<HTMLInputElement>):void {
    // console.log(evt.currentTarget.name)
    // const nameToUpdate:string = evt.currentTarget.name; 
    setDataToUpload({...dataToUpload, [evt.currentTarget.name]: evt.currentTarget.value});
  }

  return (
    <section className="add-musician">
      <div className="container">
        <h3>Добавить музыканта</h3>
        <form>
          <input name="name" onChange={showInputName}></input>
          <input name="genre" onChange={showInputName}></input>
        </form>
        <button>Добавить музыканта</button>
      </div>
    </section>
  )
}