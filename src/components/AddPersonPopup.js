import React from 'react';
import Avatar from './Avatar';
import Popup from './Popup';
import photo from '../images/avatar.png';

function AddPersonPopup(props) {

  //console.log(props.card);

  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState({file: "", imageUrl: photo});
  const [gender, setGender] = React.useState("Мужской");
  const [place, setPlace] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [about, setAbout] = React.useState("");
  
  React.useEffect(() => {
    setName(props.card.name);
    setImage({file: props.card.image.file, imageUrl: props.card.image.imageUrl});
    setGender(props.card.gender);
    setPlace(props.card.place);    
    setBirthday(props.card.birthday);
    setAbout(props.card.about);
  }, [props.card])

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleImageChange(evt) {
    evt.preventDefault();
    let reader = new FileReader();
    let file = evt.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage({
        file: file,
        imageUrl: reader.result
      });
    }
    
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

  function handleClose() {
    props.onClose(); 
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const personObject = {
      name: name,
      image: {file: image.file, imageUrl: image.imageUrl},
      place: place,
      gender: gender,
      birthday: birthday,
      about: about
    }
    props.onSubmit(personObject);  
  }

  return (
    <Popup isOpen={props.isOpen} onClose={handleClose}>
      <form className="form form_card_add" name="form_card_add" >
        <h2 className="form__title">Информация о человеке</h2>
        <div className="form__main">
          <div className="form__image" >
            <input className="form__input_content_file" id="file-input" type="file" name="file" onChange={handleImageChange} />
            <Avatar imageUrl={image.imageUrl} />
          </div>
            <fieldset className="form__info">
              <label className="form__field">
                <input className="form__input form__input_content_name" id="input-name" type="text" name="name" placeholder="ФИО" value={name} onChange={handleNameChange} required minLength="2" maxLength="30" />
                <span className="form__input-error input-name-error" ></span>
              </label>
              <div className="form__genders">
                <label className="form__genderlabel" htmlFor="genders">Пол</label>
                <select className="form__gender" name="genders" id="genders" value={gender} onChange={handleGenderChange}>
                  <option value="Мужской">Мужской</option>
                  <option value="Женский">Женский</option>
                </select>
              </div>
              <span className="form__input-error input-gender-error"></span>

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
                
              </label>
            </fieldset>
        </div>
        <button className="form__save-button" type="submit" onClick={handleSubmit} >Сохранить</button>
      </form>
    </Popup>
  )
}

export default AddPersonPopup;