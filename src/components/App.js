import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPersonPopup from './AddPersonPopup';
import CardPopup from './CardPopup';
import photo from '../images/avatar.png';
import mee from '../images/me.jpg';

function App() {

  let me = {
    area: 0,
    name:"Коротков Александр Андреевич", 
    image:{file:"", imageUrl: mee}, 
    place:"Нижний Новгород", 
    gender:"Мужской", 
    birthday:"12.03.1995", 
    about:"Родился в Нижнем Новгороде, с 6 лет учился в школе номер 82 (лицей), потом поступил в ННГУ им Лобачевского. Отучился там 6 лет, получил степень магистра математики. Потом пошелна работу в ООО Синтек где работаю 4 с половиной года. Занимаемся автоматизаией технологических процессов."
  }

  const [persons, setPersons] = React.useState([me,{},{},{},{},{},{},{},{},{}]);
  const [genCount, setGenCount] = React.useState(1);  
  const [selectedArea, setSelectedArea] = React.useState(-1);
  const [selectedCard, setSelectedCard] = React.useState({name:"", image:{file:"", imageUrl:photo}, place:"", gender:"", birthday:"", about:""});
  const [isAddPersonPopupVisible, setIsAddPersonPopupVisible] = React.useState(false);
  const [isCardPopupVisible, setIsCardPopupVisible] = React.useState(false);
    
  React.useEffect(() => {
    checkGeneration();
  }, [persons])

  function checkGeneration() {
    let lastGenPersons = persons.slice((genCount-1)*10, (genCount-1)*10 + 10);
    let prelastGenPersons = persons.slice((genCount-2)*10, (genCount-2)*10 + 10);
    if ((lastGenPersons.find((element) => Object.entries(element).length !== 0)))
    {
      setGenCount(genCount+1)
      let copy = Object.assign([], persons);
      copy.push({},{},{},{},{},{},{},{},{},{});
      setPersons(copy);
    }
    else if ((genCount >= 2) && 
             ((prelastGenPersons.findIndex((element) => Object.entries(element).length !== 0)) === -1) && 
             ((lastGenPersons.findIndex((element) => Object.entries(element).length !== 0)) === -1))
    {     
      let copy = Object.assign([], persons);
      copy.splice((genCount-1)*10, 10);
      setPersons(copy);
      setGenCount(genCount-1)
    }
  }

  function closeAllPopups() {
    setIsAddPersonPopupVisible(false);
    setIsCardPopupVisible(false);
    //setSelectedArea(-1);
    setSelectedCard({name:"", image:{file:"", imageUrl:photo}, place:"", gender:"", birthday:"", about:""})
  }

  function handleAddPersonClick(id) {
    setSelectedArea(id)
    setIsAddPersonPopupVisible(true);
  }

  function handleAddPerson(personObject) {
    console.log("объект добавляемого перса")
    console.log(personObject)
    let copy = Object.assign([], persons);
    let index = selectedArea;
    copy[index] = personObject;
    copy[index].area = index;
    console.log("добавляемый перс")
    console.log(copy[index])    
    setPersons(copy);
    setIsAddPersonPopupVisible(false);
  }

  function handleCardClick(card) {
    console.log("когда кликаем на карту")
    setSelectedArea(card.area);
    console.log(card)
    setSelectedCard(card);
    setIsCardPopupVisible(true);
  }

  function handleCardDeleteClick(card) {
    let copy = Object.assign([], persons);
    let index = card.area;
    copy[index] = {};
    setPersons(copy);
  }

  function handleCardEditClick(card) {
    console.log("когда кликаем на редактировать")
    console.log(card)
    setIsCardPopupVisible(false);
    setIsAddPersonPopupVisible(true);
  }

  function handleDrag(card) {
    setSelectedCard(card)
  }

  function handleDrop(area) {
    //Запоминаем текущие индексы (порядковые номера)
    let toindex = area;
    let fromindex = selectedCard.area;
    let copy = Object.assign([], persons);
    //Создаем клон выбранной для перемещения карточки
    const newCard = {};
    Object.assign(newCard, selectedCard);
    //Присваиваем этому клону индекс = новый индекс (место куда переместили карточку)
    newCard.area = area;
    setSelectedCard(newCard)
    //Обновляем массив со всеми данными
    copy[toindex] = newCard;
    copy[fromindex] = {};
    setPersons(copy);
    setSelectedCard({name:"", image:{file:"", imageUrl:photo}, place:"", gender:"", birthday:"", about:""})
  }

  return (
    <div className="page">
      <Header />
      <Main 
        genCount={genCount}        
        persons={persons}
        area={selectedArea}
        onAddPersonClick={handleAddPersonClick} 
        onCardClick={handleCardClick}
        onCardDeleteClick={handleCardDeleteClick}
        onDrop={handleDrop}
        onDrag={handleDrag}
      />
      <Footer />
      <AddPersonPopup
        isOpen={isAddPersonPopupVisible} 
        onClose={closeAllPopups} 
        onSubmit={handleAddPerson}
        card={selectedCard}
      />
      <CardPopup 
        isOpen={isCardPopupVisible}
        onClose={closeAllPopups} 
        card={selectedCard}
        onCardEditClick={handleCardEditClick}
      />
    </div>
  )
}

export default App;
