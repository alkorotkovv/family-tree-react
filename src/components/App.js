import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  
  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />


    <div class="popup popup_type_add ">
      <div class="popup__container">
        <form class="form form_card_add" name="form_card_add" novalidate>
          <h2 class="form__title">Добавление члена семьи</h2>
          <fieldset class="form__info">
            <label class="form__field">
              <input class="form__input form__input_content_name" id="input-name" type="text" name="name" placeholder="ФИО" value="Имя Фамилия" required minlength="2" maxlength="30" />
              <span class="form__input-error input-name-error" ></span>
            </label>
            <div class="form__genders">
              <label class="form__genderlabel" for="genders">Пол</label>
              <select class="form__gender" name="genders" id="genders">
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
              </select>
            </div>
            <span class="form__input-error input-gender-error"></span>

            <label class="form__field">
              <input class="form__input form__input_content_image" id="input-image" type="text" name="image" placeholder="Ссылка на фотографию" value="./images/photo.png" />
              <span class="form__input-error input-image-error" ></span>
            </label>
            <label class="form__field">
              <input class="form__input form__input_content_place" id="input-place" type="text" name="place" placeholder="Место рождения" />
              <span class="form__input-error input-place-error" ></span>
            </label>
            <label class="form__field">
              <input class="form__input form__input_content_birthday" id="input-birthday" type="text" name="birthday" placeholder="Дата рождения" />
              <span class="form__input-error input-birthday-error" ></span>
            </label>
            <label class="form__field">
              <textarea class="form__input form__input_content_about" id="input-about" type="text" name="about" placeholder="Информация о человеке"></textarea>
              <span class="form__input-error input-about-error" ></span>
            </label>
            <label class="form__field">
              <p class="form_id" id="form-id"></p>
            </label>
          </fieldset>
          <button class="form__save-button form__save-button_disabled" disabled type="submit">Добавить</button>
        </form>
        <button class="popup__close-button" type="button" aria-label="Close"></button>
      </div>
    </div>


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

   </div>
  )
}

export default App;
