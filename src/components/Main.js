import React from 'react';
import Generation from './Generation';

function Main(props) {

  const [genCount, setGenCount] = React.useState(1);

  let sections=[0];
  for (let i = 1; i < genCount; i++) {
    sections.push(i)
  }

  return (
    <main className="content">
      {
        sections.map(element => 
          <Generation key={element} id ={element} onAddPersonClick={props.onAddPersonClick} />
        )
      }
   </main>
  )
}

export default Main;