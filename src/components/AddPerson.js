import Card from "./Card";

function AddPerson(props) {

  /*
  let block;
  if (Object.entries(props.card).length !== 0)
    block = (<Card name={props.card.name} gender={props.card.gender} />)
  else 
    block = (<></>)
    */
  let areaId = props.genid * 10 + props.id;

  function handleClick() {
    props.onAddPersonClick(areaId);
  }

  return (
    <div className="area" onClick={handleClick} id={areaId}>
      +
      {
        //block
      }
    </div>
  )
}

export default AddPerson;