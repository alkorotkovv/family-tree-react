import Popup from './Popup';
import photo from '../images/photo.png';

function CardPopup(props) {

  function handleClick() {
    const editsCard = {};
    Object.assign(editsCard, props.card);
    props.onCardEditClick(editsCard)
  }

  return (
    <Popup isOpen={props.isOpen} onClose={props.onClose}>
        <div className="card-scale">
          <div className="card-scale__main">
            <img className="card-scale__image" src={props.card.image.imageUrl} alt="попап фотография" />
            <div className="card-scale__information">
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
          </div>
          <div className="form__buttons">
            <button className="form__save-button" type="submit" onClick={handleClick} >Редактировать</button>
            <button className="form__save-button" type="submit" onClick={handleClick} >Удалить</button>
          </div>
        </div>
      </Popup>
  )
}

export default CardPopup;