import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPersonPopup from './AddPersonPopup';
import CardPopup from './CardPopup';

function App() {

  const [genCount, setGenCount] = React.useState(1);
  const [isAddPersonPopupVisible, setIsAddPersonPopupVisible] = React.useState(false);
  const [selectedArea, setSelectedArea] = React.useState(-1);
  const [persons, setPersons] = React.useState([{},{},{},{},{},{},{},{},{},{}]);
  
  function checkGeneration(persons) {
    //console.log(persons)
    let lastGenPersons = persons.slice((genCount-1)*10, (genCount-1)*10 + 10);
    let prelastGenPersons = persons.slice((genCount-2)*10, (genCount-2)*10 + 10);
    console.log(lastGenPersons)
    console.log(genCount);
    if ( (lastGenPersons.find((element,index) => Object.entries(element).length !== 0)))
    {
      console.log("nado add")
      setGenCount(genCount+1)
      let copy = Object.assign([], persons);
      copy.push({},{},{},{},{},{},{},{},{},{});
      setPersons(copy);
    }
    else if ((genCount >= 2) && 
             ((prelastGenPersons.findIndex((element,index) => Object.entries(element).length !== 0)) === -1) && 
             ((lastGenPersons.findIndex((element,index) => Object.entries(element).length !== 0)) === -1))
    {
      console.log("nado remove")         
      let copy = Object.assign([], persons);
      copy.splice((genCount-1)*10, 10);
      setPersons(copy);
      setGenCount(genCount-1)
    }
  }

  function closeAllPopups() {
    setIsAddPersonPopupVisible(false);
  }

  function handleAddPersonClick(id) {
    setSelectedArea(id)
    setIsAddPersonPopupVisible(true);
  }

  function handleAddPerson(personObject) {
    let copy = Object.assign([], persons);
    let index = selectedArea;
    copy[index] = personObject;
    setPersons(copy);
    setIsAddPersonPopupVisible(false);
  }

  function handleCardDeleteClick(id) {
    setSelectedArea(id)
    console.log("delete")
    let copy = Object.assign([], persons);
    let index = selectedArea;
    copy[index] = {};
    setPersons(copy);
  }

  return (
    <div className="page">
      <Header />
      <Main 
        genCount={genCount}        
        persons={persons}
        area={selectedArea}
        onAddPersonClick={handleAddPersonClick} 
        onCardDeleteClick={handleCardDeleteClick}
        onCheckGen={checkGeneration}
      />
      <Footer />
      <AddPersonPopup 
        isOpen={isAddPersonPopupVisible} 
        onClose={closeAllPopups} 
        onSubmit={handleAddPerson}
      />
      <CardPopup />
    </div>
  )
}

export default App;
