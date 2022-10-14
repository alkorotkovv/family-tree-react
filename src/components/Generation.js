import React from 'react';
import {AreasCount} from "../utils/constants.js";
import AddPerson from "./AddPerson";
import Card from "./Card.js";

function Generation(props) {

  React.useEffect(() => {
    props.onCheckGen(props.persons);
  }, [props.persons])

  let areas=[];
  for (let i = 0; i < AreasCount; i++) {
    areas.push(i)
  }
  
  let genPersons = props.persons.slice(props.id*10, props.id*10 + 10);

  return (
    <section className="generation" id={props.id}>
      {
        genPersons.map((element,index) => {
          if (Object.entries(element).length === 0) 
            return ( 
              <AddPerson 
                key={index} 
                id={index} 
                genid={props.id}                 
                persons={genPersons} 
                area={props.area} 
                card={element} 
                onAddPersonClick={props.onAddPersonClick} 
              />)
          else
            return ( 
              <Card 
                key={index} 
                id={index} 
                genid={props.id} 
                name={genPersons[index].name} 
                gender={genPersons[index].gender} 
                onCardDeleteClick={props.onCardDeleteClick}
              />)         
        })
      }
    </section>
  )
}

export default Generation;