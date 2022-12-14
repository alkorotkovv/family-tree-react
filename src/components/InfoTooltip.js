import imageGood from '../images/good.png';
import imageBad from '../images/bad.png';

function InfoTooltip(props) {

  const image = props.isAnswerGood ? imageGood : imageBad;

  function handleClick(evt) {
    if (evt.target.classList.contains('popup_opened'))
      props.onClose();
  }

  return (
    <div className={`popup popup_type_tooltip` + (props.isOpen && " popup_opened")} onClick={handleClick}>
      <div className="popup__container">
        <form className="form form_type_tooltip" name = "form_tooltip" noValidate>
          <img className="form__tooltip-image" src={image} alt={props}/>
          <h2 className="form__subtitle">{props.title}</h2>
        </form>
        <button className="popup__close-button" onClick={props.onClose} type="button" aria-label="Close"></button>
      </div>
    </div>
  )
}

export default InfoTooltip;