import photo from '../images/photo.png';

function Card(props) {

  function handleCardClick() {
    console.log("fhhffj")
  }

  function handleCardDeleteClick() {
    props.onCardDeleteClick(areaId);
  }

  let areaId = props.genid * 10 + props.id;

  return (
    <li className="card">
      <div className="card__content" draggable="true" id={areaId} onClick={handleCardClick}>
          <img className="card__image" src={photo} alt="фотография" />
          <h2 className={`card__title` + (props.gender === "male" ? " card__title_male" :  " card__title_female")}>{props.name}</h2>        
      </div>
      <button className="card__delete card__delete_visible" type="button" aria-label="Delete" onClick={handleCardDeleteClick} />
    </li>
  )
}

export default Card;