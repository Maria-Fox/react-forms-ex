import react, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm"
import { v4 as uuid } from 'uuid';

const BoxList = () => {
  let INITIALSTATE = [{
    width: "90",
    height: "88",
    backgroundColor: "peachpuff",
    id : uuid()
  }, 
  {
    width: "77",
    height: "78",
    backgroundColor: "pink",
    id: uuid()
  }]

  let [boxes, setBoxes ] = useState(INITIALSTATE);

  const createBox = (newBox) =>{
    setBoxes(boxes => [...boxes, {...newBox, id: uuid()}]);
  } 

  const handleDelete = (boxId) => {
    let boxesToKeep = boxes.filter(toKeep => (toKeep.id != boxId))
    setBoxes([...boxesToKeep]);
    }


  return (
    <div>
      <NewBoxForm createBox = {createBox}/>
    

      {boxes.map(({width, height, backgroundColor, id}) => {
      return (
        <Box 
        width = {width}
        height = {height}
        backgroundColor = {backgroundColor} 
        handleDelete = {() => handleDelete(id)}
        key = {id}
      />)}
  )}
    </div>
  )};

export default BoxList;