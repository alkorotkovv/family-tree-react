function CardPopup() {

  return (
    <div className="popup popup_type_card">
      <div className="popup__container">
        <div className="card-scale">
          <img className="card-scale__image" src='./images/photo.png' alt="попап фотография" />
          <div className="card-scale__information">
            <h2 className="card-scale__title">Коротков Александр Андреевич</h2>
            <div className="card-scale__line-block">
              <p className="card-scale__line-block-text">Пол:&ensp;</p>
              <p className="card-scale__line-block-text card-scale__gender">???</p>
            </div>
            <div className="card-scale__line-block">
              <p className="card-scale__line-block-text">Дата рождения:&ensp;</p>
              <p className="card-scale__line-block-text card-scale__birthday">12.03.1995</p>
            </div>
            <div className="card-scale__line-block">
              <p className="card-scale__line-block-text">Место рождения:&ensp;</p>
              <p className="card-scale__line-block-text card-scale__place">Нижний Новгород</p>
            </div>
            <div className="card-scale__line-block">
              <p className="card-scale__line-block-text">Поколение:&ensp;</p>
              <p className="card-scale__line-block-text card-scale__generation">0</p>
            </div>
            <p className="card-scale__line-block-text card-scale__about">Студент, инженер, лицей 82, ННГУ им Лобачевского,Студент, инженер, лицей 82, ННГУ им Лобачевского,Студент,
                инженер, лицей 82, ННГУ им Лобачевского,Студент, инженер, лицей 82, ННГУ им Лобачевского</p>
          </div>
        </div>
        <button className="popup__close-button" type="button" aria-label="Close"></button>
      </div>
    </div>
  )
}

export default CardPopup;