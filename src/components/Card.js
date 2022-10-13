import photo from '../images/photo.png';

function Card(props) {

  return (
    <div className="card" draggable="true">
        <img className="card__image" src={photo} alt="фотография" />
        <h2 className="card__title">{props.name}</h2>
        <button className="card__delete card__delete_visible" type="button" aria-label="Delete"></button>
    </div>
  )
}

export default Card;