import Card from "./Card";

function AddPerson(props) {

  let areaId = props.genid * 10 + props.id;

  function handleClick() {
    props.onAddPersonClick(areaId);
  }

  return (
    <div className="area" onClick={handleClick} id={areaId}>
      +
    </div>
  )
}

export default AddPerson;