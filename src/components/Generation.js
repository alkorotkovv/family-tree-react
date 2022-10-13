import {AreasCount} from "../utils/constants.js";
import AddPerson from "./AddPerson";

function Generation(props) {
  //console.log(props.persons);

  let areas=[];
  for (let i = 0; i < AreasCount; i++) {
    areas.push(i)
  }

  return (
    <section className="generation" id={props.id}>
      {
        props.persons.map((element,index) => 
          <AddPerson key={index} id={index} onAddPersonClick={props.onAddPersonClick} persons={props.persons} area={props.area} card={element} />
        )
      }
    </section>
  )
}

export default Generation;