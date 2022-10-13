import Card from "./Card";

function AddPerson(props) {

  let block;
  if (Object.entries(props.card).length !== 0)
    block = (<Card name={props.card.name} gender={props.card.gender} />)
  else 
    block = (<></>)


  function handleClick() {
    props.onAddPersonClick(props.id);
  }

  return (
    <div className="area" onClick={handleClick}>
      +
      {
        block
      }
    </div>
  )
}

export default AddPerson;