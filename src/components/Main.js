import React from 'react';
import Generation from './Generation';

function Main(props) {

  const sections=[0];
  for (let i = 1; i < props.genCount; i++) {
    sections.push(i)
  }

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
            onCardClick={props.onCardClick}
            onCardDeleteClick={props.onCardDeleteClick}
            onDrop={props.onDrop}
            onDrag={props.onDrag}
          />
        )
      }
   </main>
  )
}

export default Main;