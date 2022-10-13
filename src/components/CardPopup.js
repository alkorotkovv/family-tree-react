function CardPopup() {

  return (
    <div class="popup popup_type_card">
      <div class="popup__container">
        <div class="card-scale">
          <img class="card-scale__image" src='./images/photo.png' alt="попап фотография" />
          <div class="card-scale__information">
            <h2 class="card-scale__title">Коротков Александр Андреевич</h2>
            <div class="card-scale__line-block">
              <p class="card-scale__line-block-text">Пол:&ensp;</p>
              <p class="card-scale__line-block-text card-scale__gender">???</p>
            </div>
            <div class="card-scale__line-block">
              <p class="card-scale__line-block-text">Дата рождения:&ensp;</p>
              <p class="card-scale__line-block-text card-scale__birthday">12.03.1995</p>
            </div>
            <div class="card-scale__line-block">
              <p class="card-scale__line-block-text">Место рождения:&ensp;</p>
              <p class="card-scale__line-block-text card-scale__place">Нижний Новгород</p>
            </div>
            <div class="card-scale__line-block">
              <p class="card-scale__line-block-text">Поколение:&ensp;</p>
              <p class="card-scale__line-block-text card-scale__generation">0</p>
            </div>
            <p class="card-scale__line-block-text card-scale__about">Студент, инженер, лицей 82, ННГУ им Лобачевского,Студент, инженер, лицей 82, ННГУ им Лобачевского,Студент,
                инженер, лицей 82, ННГУ им Лобачевского,Студент, инженер, лицей 82, ННГУ им Лобачевского</p>
          </div>
        </div>
        <button class="popup__close-button" type="button" aria-label="Close"></button>
      </div>
    </div>
  )
}

export default CardPopup;