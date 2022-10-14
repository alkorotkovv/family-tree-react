import Card from "./Card";

function AddPerson(props) {

  let areaId = props.genid * 10 + props.id;

  function handleClick() {
    props.onAddPersonClick(areaId);
  }
  
  function handleDragOver(evt) {
    evt.preventDefault();
  }

  function handleDrop(evt) {
    evt.preventDefault();
    props.onDrop(areaId)
  }

  return (
    <div className="area" onClick={handleClick} onDragOver={handleDragOver} onDrop={handleDrop} id={areaId}>
      +
    </div>
  )
}

export default AddPerson;