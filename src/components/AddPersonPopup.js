import React from 'react';
import Popup from './Popup';

function AddPersonPopup(props) {

  const [name, setName] = React.useState("Имя Фамилия");
  const [image, setImage] = React.useState("./images/photo.png");
  const [place, setPlace] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [gender, setGender] = React.useState("male");

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

  function handleGenderChange(evt) {
    setGender(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const personObject = {
      name: name,
      image: image,
      place: place,
      gender: gender,
      birthday: birthday,
      about: about
    }
    props.onSubmit(personObject);
  }

  return (
    <Popup isOpen={props.isOpen} onClose={props.onClose}>
      <form className="form form_card_add" name="form_card_add" noValidate>
        <h2 className="form__title">Добавление члена семьи</h2>
        <fieldset className="form__info">
          <label className="form__field">
            <input className="form__input form__input_content_name" id="input-name" type="text" name="name" placeholder="ФИО" value={name} onChange={handleNameChange} required minLength="2" maxLength="30" />
            <span className="form__input-error input-name-error" ></span>
          </label>
          <div className="form__genders">
            <label className="form__genderlabel" htmlFor="genders">Пол</label>
            <select className="form__gender" name="genders" id="genders" value={gender} onChange={handleGenderChange}>
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
        <button className="form__save-button" type="submit" onClick={handleSubmit} >Добавить</button>
      </form>
    </Popup>
  )
}

export default AddPersonPopup;