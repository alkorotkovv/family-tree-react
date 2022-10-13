function AddPerson(props) {

  function handleClick() {
    props.onAddPersonClick();
  }

  return (
    <div className="area" onClick={handleClick}>+</div>
  )
}

export default AddPerson;