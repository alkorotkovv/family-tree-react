import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPersonPopup from './AddPersonPopup';
import CardPopup from './CardPopup';

function App() {

  const [isAddPersonPopupVisible, setIsAddPersonPopupVisible] = React.useState(false);
  const [selectedArea, setSelectedArea] = React.useState(-1);
  const [persons, setPersons] = React.useState([{},{},{},{},{},{},{},{},{},{}]);

  function closeAllPopups() {
    setIsAddPersonPopupVisible(false);
    //setSelectedArea(-1);
  }

  function handleAddPersonClick(id) {
    //console.log(id)
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

  return (
    <div className="page">
      <Header />
      <Main 
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
