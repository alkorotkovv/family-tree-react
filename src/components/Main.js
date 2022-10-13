import React from 'react';
import Generation from './Generation';

function Main(props) {

  let sections=[0];
  for (let i = 1; i < props.genCount; i++) {
    sections.push(i)
  }

  return (
    <main className="content">
      {
        sections.map(element => 
          <Generation key={element} id ={element} onAddPersonClick={props.onAddPersonClick} persons={props.persons} area={props.area} />
        )
      }
   </main>
  )
}

export default Main;