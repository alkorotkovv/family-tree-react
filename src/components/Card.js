import photo from '../images/photo.png';

function Card(props) {

  const cardTitleClassName = (`card__title ${props.card.gender === "Мужской" ? " card__title_male" :  " card__title_female"}`);
  const cardContentClassName = (`card__content ${props.card.gender === "Мужской" ? " card__content_male" :  " card__content_female"}`);

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleCardDeleteClick() {
    props.onCardDeleteClick(props.card);
  }

  function handleDragStart(evt) {
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
      <div className={cardContentClassName} id={props.card.area} onClick={handleCardClick}>
          <img className="card__image" src={props.card.image.imageUrl} alt="фотография" />
          <h2 className={cardTitleClassName}>{props.card.name}</h2>        
      </div>
      <button className="card__delete card__delete_visible" type="button" aria-label="Delete" onClick={handleCardDeleteClick} />
    </li>
  )
}

export default Card;