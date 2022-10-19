import React from 'react';

function Popup(props) {

  console.log(props.type);

  function handleClick(evt) {
    if (evt.target.classList.contains('popup_opened'))
    props.onClose();
  }

  return (
    <div className={`popup ` + (props.type) + (props.isOpen && " popup_opened")} onClick={handleClick} >
      <div className="popup__container">
        {props.children}
        <button className="popup__close-button" type="button" aria-label="Close" onClick={props.onClose} />
      </div>
    </div>
  )
}

export default Popup;