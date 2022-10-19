import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import photo from '../images/avatar.png';
import {Me} from '../utils/constants';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AddPersonPopup from './AddPersonPopup';
import CardPopup from './CardPopup';
import AckPopup from './AckPopup';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import Menu from './Menu';

function App() {

  const [persons, setPersons] = React.useState([Me,{},{},{},{},{},{},{},{},{}]);
  const [genCount, setGenCount] = React.useState(1);  
  const [selectedArea, setSelectedArea] = React.useState(-1);
  const [selectedCard, setSelectedCard] = React.useState({name:"", image:{file:"", imageUrl:photo}, gender:"Мужской", place:"", birthday:"", about:""});
  const [isAddPersonPopupVisible, setIsAddPersonPopupVisible] = React.useState(false);
  const [isCardPopupVisible, setIsCardPopupVisible] = React.useState(false);
  const [isAckPopupVisible, setIsAckPopupVisible] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [tooltip, setTooltipText] = React.useState({text:"текст ошибки", isAnswerGood: false});
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false);
  const history = useHistory();
  const [isMenuVisible, setIsMenuVisible] = React.useState(false);
    
  React.useEffect(() => {
    checkGeneration();
  }, [persons]);

  //Функция для проверки создания нового поколения
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

  //Функция задающая дефолтную карточку
  function setDefaultSelectedCard() {
    setSelectedCard({name:"", image:{file:"", imageUrl:photo}, gender:"Мужской", place:"", birthday:"", about:""});
  }

  function handleTooltipDisplay(text, isAnswerGood) {
    setTooltipText({text: text, isAnswerGood: isAnswerGood});
  }

  //Функция закрытия всех попапов
  function closeAllPopups() {
    setIsAddPersonPopupVisible(false);
    setIsCardPopupVisible(false);
    setIsAckPopupVisible(false);
    setIsInfoTooltipPopupOpen(false);
    setTimeout(setDefaultSelectedCard, 300);
  }

  function handleAddPersonClick(id) {
    setSelectedArea(id)
    setIsAddPersonPopupVisible(true);
  }

  function handleAddPerson(personObject) {
    let copy = Object.assign([], persons);
    let index = selectedArea;
    copy[index] = personObject;
    copy[index].area = index;
    setPersons(copy);
    setIsAddPersonPopupVisible(false);
  }

  function handleCardClick(card) {
    setSelectedArea(card.area);    
    setSelectedCard(card);
    setIsCardPopupVisible(true);
  }

  function handleCardDeleteClick(card) {
    let copy = Object.assign([], persons);
    let index = card.area;
    copy[index] = {};
    setPersons(copy);
    setIsAckPopupVisible(false);
    setDefaultSelectedCard();
  }

  function handleCardEditClick() {
    setIsCardPopupVisible(false);
    setIsAddPersonPopupVisible(true);
  }

  function handleDeletePopupClick(card) {
    setSelectedCard(card);
    setIsCardPopupVisible(false);
    setIsAckPopupVisible(true);
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
    //Устанавливаем карточку по дефолту
    setDefaultSelectedCard();
  }

  //Обработчик сабмита формы входа
  function handleLoginSubmit(email, password) {
    if ((email==="1") && (password==="1")) {
      //localStorage.setItem('token', res.token);
      //setEmail(email);
      setLoggedIn(true);
      history.push("/");
    }
    else {
      handleTooltipDisplay("Введенные данные некорректны", false);
      setIsInfoTooltipPopupOpen(true);
    }
  }  

  //Обработчик выхода из аккаунта
  function handleExitSubmit() {
    //localStorage.removeItem('token');
    setLoggedIn(false);
    history.push("/sign-in");
  }

  function handleOpenMenu() {
    console.log("открыть меню");
    setIsMenuVisible(true);
  }

  function closeMenu() {
    console.log("закрыть меню");
    setIsMenuVisible(false);
  }

  return (
    <div className="page">
      <Header onOpenMenu={handleOpenMenu} onExit={handleExitSubmit} />
      <Menu isOpen ={isMenuVisible} onClose={closeMenu} />
      <Switch>
        <Route path="/sign-in">
          <Login onLogin={handleLoginSubmit} />
        </Route>
        <Route path="/sign-up">
          <Register  />
        </Route>
        <ProtectedRoute
            path="/"
            loggedIn={loggedIn}
            genCount={genCount}        
            persons={persons}
            area={selectedArea}
            onAddPersonClick={handleAddPersonClick} 
            onCardClick={handleCardClick}
            onCardDeleteClick={handleDeletePopupClick}
            onDrop={handleDrop}
            onDrag={handleDrag}
            component={Main}
          />
        <Main 
          genCount={genCount}        
          persons={persons}
          area={selectedArea}
          onAddPersonClick={handleAddPersonClick} 
          onCardClick={handleCardClick}
          onCardDeleteClick={handleDeletePopupClick}
          onDrop={handleDrop}
          onDrag={handleDrag}
        />        
      </Switch>
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
        onCardDeleteClick={handleDeletePopupClick}
      />
      <AckPopup 
        isOpen={isAckPopupVisible}
        onClose={closeAllPopups}
        card={selectedCard}
        onCardDeleteClick={handleCardDeleteClick}
      />
      <InfoTooltip isOpen={isInfoTooltipPopupOpen} onClose={closeAllPopups} isAnswerGood={tooltip.isAnswerGood} title={tooltip.text} />
    </div>
  )
}

export default App;
