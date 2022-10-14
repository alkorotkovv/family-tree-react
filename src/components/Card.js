import photo from '../images/photo.png';

function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleCardDeleteClick() {
    props.onCardDeleteClick(props.card);
  }

  function handleDragStart(evt) {
    //console.log(props.card);
    props.onDrag(props.card)
  }

  function handleDragLeave(evt) {

  }

  function handleDragEnd(evt) {

  }

  function handleDragOver(evt) {
    evt.preventDefault();
  }

  function handleDrop(evt) {
    evt.preventDefault();
  }

  return (
    <li className="card" draggable={true} onDragStart={handleDragStart} onDragLeave={handleDragLeave} onDragEnd={handleDragEnd} onDragOver={handleDragOver} onDrop={handleDrop} >
      <div className="card__content" id={props.card.area} onClick={handleCardClick}>
          <img className="card__image" src={photo} alt="фотография" />
          <h2 className={`card__title` + (props.card.gender === "Мужской" ? " card__title_male" :  " card__title_female")}>{props.card.name}</h2>        
      </div>
      <button className="card__delete card__delete_visible" type="button" aria-label="Delete" onClick={handleCardDeleteClick} />
    </li>
  )
}

export default Card;