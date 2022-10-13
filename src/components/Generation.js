import {AreasCount} from "../utils/constants.js";
import AddPerson from "./AddPerson";

function Generation(props) {

  let areas=[];
  for (let i = 0; i < AreasCount; i++) {
    areas.push(i)
  }

  return (
    <section className="generation" id={props.id}>
      {
        areas.map(element => 
          <AddPerson key={element} id={element} onAddPersonClick={props.onAddPersonClick} />
        )
      }
    </section>
  )
}

export default Generation;