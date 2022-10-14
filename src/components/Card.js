import photo from '../images/photo.png';

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleCardDeleteClick() {
    props.onCardDeleteClick(props.card);
  }

  return (
    <li className="card">
      <div className="card__content" draggable="true" id={props.card.area} onClick={handleCardClick}>
          <img className="card__image" src={photo} alt="фотография" />
          <h2 className={`card__title` + (props.card.gender === "Мужской" ? " card__title_male" :  " card__title_female")}>{props.card.name}</h2>        
      </div>
      <button className="card__delete card__delete_visible" type="button" aria-label="Delete" onClick={handleCardDeleteClick} />
    </li>
  )
}

export default Card;