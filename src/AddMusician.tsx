import React from "react"
import { Musician } from "./models"
export default function AddMusician() {
  const [dataToUpload, setDataToUpload] = React.useState<Musician | object>({})
  return (
    <section className="add-musician">
      <div className="container">
        <h3>Добавить музыканта</h3>
        <form>
          <input></input>
          <input></input>
        </form>
        <button></button>
      </div>
    </section>
  )
}