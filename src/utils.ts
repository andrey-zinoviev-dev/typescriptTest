import { Musician } from "./models";
import SleepToken from "./assets/wirdj49xmu4b1.jpg";
import Billy from "./assets/billy.jpeg";

export const musicians:Musician[] = [
  {
    name: "Sleep Token",
    genre: "Metal",
    date: new Date().toDateString(),
    img: SleepToken,
  },
  {
    name: "Billy Herrington",
    genre: "Men music",
    date: new Date().toDateString(),
    img: Billy
  }
]