function Avatar(props) {

  console.log(props)

  return (
      <label className="form__label" htmlFor="file-input">
        <img className="form__avatar" src={props.imageUrl} alt="аватар" />
      </label>
  )
}

export default Avatar;