import React from 'react';
import {AreasCount} from "../utils/constants.js";
import AddPerson from "./AddPerson";
import Card from "./Card.js";

function Generation(props) {

  const areas=[];
  for (let i = 0; i < AreasCount; i++) {
    areas.push(i);
  }
  
  const genPersons = props.persons.slice(props.id*10, props.id*10 + 10);

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
                genPersons={genPersons} 
                persons={props.persons}
                area={props.area}
                index={props.id}                  
                onAddPersonClick={props.onAddPersonClick} 
                onDrop={props.onDrop}
              />)
          else
            return ( 
              <Card 
                key={index} 
                id={index} 
                genid={props.id} 
                card={element}
                onCardClick={props.onCardClick}
                onCardDeleteClick={props.onCardDeleteClick}
                onDrag={props.onDrag}
              />)         
        })
      }
    </section>
  )
}

export default Generation;