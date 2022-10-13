import AreasCount from "../utils/constants.js";
import Area from "./Area";

function Generation(props) {

  let areas=[];
  for (let i = 0; i < AreasCount; i++) {
    areas.push(i)
  }

  return (
    <section className="generation" id={props.id}>
      {
        areas.map(element => 
          <Area key={element} id ={element}/>
        )
      }
    </section>
  )
}

export default Generation;