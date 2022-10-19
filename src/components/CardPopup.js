import Popup from './Popup';

function CardPopup(props) {

  function handleEditClick() {
    props.onCardEditClick()
  }

  function handleDeleteClick() {
    props.onCardDeleteClick(props.card)
  }

  return (
    <Popup isOpen={props.isOpen} onClose={props.onClose} type="popup_type_card" >
        <div className="card-scale">
          <div className="card-scale__main">
            <img className="card-scale__image" src={props.card.image.imageUrl} alt="попап фотография" />
              <h2 className="card-scale__title">{props.card.name}</h2>
              <div className="card-scale__line-block">
                <p className="card-scale__line-block-text">Пол:&ensp;</p>
                <p className="card-scale__line-block-text card-scale__gender">{props.card.gender}</p>
              </div>
              <div className="card-scale__line-block">
                <p className="card-scale__line-block-text">Дата рождения:&ensp;</p>
                <p className="card-scale__line-block-text card-scale__birthday">{props.card.birthday}</p>
              </div>
              <div className="card-scale__line-block">
                <p className="card-scale__line-block-text">Место рождения:&ensp;</p>
                <p className="card-scale__line-block-text card-scale__place">{props.card.place}</p>
              </div>
              <p className="card-scale__line-block-text card-scale__about">{props.card.about}</p>
          </div>
          <div className="form__buttons">
            <button className="form__save-button" type="submit" onClick={handleEditClick} >Редактировать</button>
            <button className="form__save-button" type="submit" onClick={handleDeleteClick} >Удалить</button>
          </div>
        </div>
      </Popup>
  )
}

export default CardPopup;