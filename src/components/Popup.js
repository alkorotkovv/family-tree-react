import React from 'react';

function Popup(props) {

  function handleClick(evt) {
    if (evt.target.classList.contains('popup_opened'))
    props.onClose();
  }

  return (
    <div className={`popup popup_type_add` + (props.isOpen && " popup_opened")} onClick={handleClick} >
      <div className="popup__container">
        {props.children}
        <button className="popup__close-button" type="button" aria-label="Close" onClick={props.onClose} ></button>
      </div>
    </div>
  )
}

export default Popup;