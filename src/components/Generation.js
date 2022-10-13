import {AreasCount} from "../utils/constants.js";
import AddPerson from "./AddPerson";
import Card from "./Card.js";

function Generation(props) {
  //console.log(props.persons)
  
  let areas=[];
  for (let i = 0; i < AreasCount; i++) {
    areas.push(i)
  }

  
  let genPercons = props.persons.slice(props.id * 10, props.id + 10);
  console.log("по 10 - поколение")
  console.log(props.id)
  console.log(genPercons)

  return (
    <section className="generation" id={props.id}>
      {
        genPercons.map((element,index) => {
          //console.log(element.length);
          if (Object.entries(element).length === 0) 
            return ( <AddPerson key={index} id={index} genid={props.id} onAddPersonClick={props.onAddPersonClick} persons={props.persons} area={props.area} card={element} />)
          else
            return ( <Card key={index} id={index} genid={props.id} name={props.persons[index].name} gender={props.persons[index].gender} />);
        

        }
          
        )
      }
    </section>
  )
}

export default Generation;