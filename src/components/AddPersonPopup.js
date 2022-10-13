import React from 'react';

function AddPersonPopup() {

  const [name, setName] = React.useState("Имя Фамилия");
  const [image, setImage] = React.useState("./images/photo.png");
  const [place, setPlace] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [about, setAbout] = React.useState("");

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleImageChange(evt) {
    setImage(evt.target.value);
  }

  function handlePlaceChange(evt) {
    setPlace(evt.target.value);
  }

  function handleBirthdayChange(evt) {
    setBirthday(evt.target.value);
  }

  function handleAboutChange(evt) {
    setAbout(evt.target.value);
  }

  return (
    <div className="popup popup_type_add">
      <div className="popup__container">
        <form className="form form_card_add" name="form_card_add" noValidate>
          <h2 className="form__title">Добавление члена семьи</h2>
          <fieldset className="form__info">
            <label className="form__field">
              <input className="form__input form__input_content_name" id="input-name" type="text" name="name" placeholder="ФИО" value={name} onChange={handleNameChange} required minLength="2" maxLength="30" />
              <span className="form__input-error input-name-error" ></span>
            </label>
            <div className="form__genders">
              <label className="form__genderlabel" htmlFor="genders">Пол</label>
              <select className="form__gender" name="genders" id="genders">
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
              </select>
            </div>
            <span className="form__input-error input-gender-error"></span>

            <label className="form__field">
              <input className="form__input form__input_content_image" id="input-image" type="text" name="image" placeholder="Ссылка на фотографию" value={image} onChange={handleImageChange} />
              <span className="form__input-error input-image-error" ></span>
            </label>
            <label className="form__field">
              <input className="form__input form__input_content_place" id="input-place" type="text" name="place" placeholder="Место рождения" value={place} onChange={handlePlaceChange} />
              <span className="form__input-error input-place-error" ></span>
            </label>
            <label className="form__field">
              <input className="form__input form__input_content_birthday" id="input-birthday" type="text" name="birthday" placeholder="Дата рождения" value={birthday} onChange={handleBirthdayChange} />
              <span className="form__input-error input-birthday-error" ></span>
            </label>
            <label className="form__field">
              <textarea className="form__input form__input_content_about" id="input-about" type="text" name="about" placeholder="Информация о человеке" value={about} onChange={handleAboutChange}></textarea>
              <span className="form__input-error input-about-error" ></span>
            </label>
            <label className="form__field">
              <p className="form_id" id="form-id"></p>
            </label>
          </fieldset>
          <button className="form__save-button form__save-button_disabled" disabled type="submit">Добавить</button>
        </form>
        <button className="popup__close-button" type="button" aria-label="Close"></button>
      </div>
    </div>
  )
}

export default AddPersonPopup;