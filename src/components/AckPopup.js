import Popup from './Popup';

function AckPopup(props) {
  
  //console.log(props.card)

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onCardDeleteClick(props.card);
  }

  function handleCancel() {
    props.onClose();
  }

  return (
    <Popup isOpen={props.isOpen} onClose={props.onClose} type="popup_type_ack">
        <form className="form form_type_delete" name="form_type_delete" noValidate>
          <h2 className="form__title">Вы уверены что хотите удалить карточку?</h2>
          <div className="form__buttons">
            <button className="form__save-button" type="submit" onClick={handleSubmit}>Да</button>
            <button className="form__save-button" type="button" onClick={handleCancel}>Отмена</button>
          </div>
        </form>
    </Popup>
  )
}

export default AckPopup;
