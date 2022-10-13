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

  function closeAllPopups() {
    setIsAddPersonPopupVisible(false);
  }

  function handleAddPersonClick(id) {
    console.log(id)
    setSelectedArea(id)
    setIsAddPersonPopupVisible(true);
  }

  function handleAddPerson(personObject) {
    console.log(selectedArea)
    let copy = Object.assign([], persons);
    let index = selectedArea;
    copy[index] = personObject;
    copy.push({});
    copy.push({});
    copy.push({});
    copy.push({});
    copy.push({});
    copy.push({});
    copy.push({});
    copy.push({});
    copy.push({});
    copy.push({});
    setPersons(copy);
    console.log(persons);
    setIsAddPersonPopupVisible(false);

    setGenCount(genCount+1);
    //setPersons([...persons,{},{}])
  }

  return (
    <div className="page">
      <Header />
      <Main 
        genCount={genCount}
        onAddPersonClick={handleAddPersonClick} 
        persons={persons}
        area={selectedArea}
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
