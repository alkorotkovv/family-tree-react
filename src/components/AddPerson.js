import Card from "./Card";

function AddPerson(props) {

  //console.log(props.persons)
  //console.log(props.id)
  //console.log(props.id)
  //console.log(Object.entries(props.persons[2]).length);
  //console.log(props.card);
  //console.log(props.id);

  let block;
  if (Object.entries(props.card).length !== 0)
      block = (<Card name={props.card.name} />)
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