import React, {useState} from "react";

const Box = ({height, width, backgroundColor, id, handleDelete}) => {

  let pxHeight = `${height}px`;
  let pxWidth = `${width}px`

  return (
    <div style = {{height: pxHeight, width: pxWidth, backgroundColor: backgroundColor}}>

      <button onClick = {handleDelete}> X </button>

    </div>
  )
};

export default Box;