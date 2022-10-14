import React from 'react';
import Generation from './Generation';

function Main(props) {

  let sections=[0];
  for (let i = 1; i < props.genCount; i++) {
    sections.push(i)
  }

  //console.log(props.persons)

  return (
    <main className="content">
      {
        sections.map(element => 
          <Generation 
            key={element} 
            id ={element}             
            persons={props.persons} 
            area={props.area} 
            onAddPersonClick={props.onAddPersonClick} 
            onCardDeleteClick={props.onCardDeleteClick} 
            onCheckGen={props.onCheckGen}
          />
        )
      }
   </main>
  )
}

export default Main;