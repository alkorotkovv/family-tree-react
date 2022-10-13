import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPersonPopup from './AddPersonPopup';
import CardPopup from './CardPopup';

function App() {

  const [isAddPersonPopupVisible, setIsAddPersonPopupVisible] = React.useState(false);

  function closeAllPopups() {
    setIsAddPersonPopupVisible(false);
  }

  function handleAddPersonClick() {
    setIsAddPersonPopupVisible(true);
  }

  function handleAddPerson() {
    console.log("AppAddPerson");
  }

  return (
    <div className="page">
      <Header />
      <Main onAddPersonClick={handleAddPersonClick} />
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
