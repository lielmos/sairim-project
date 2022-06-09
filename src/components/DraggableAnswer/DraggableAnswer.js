import React from "react";
import "./DraggableAnswer.css";
import { DragDropContainer } from "react-drag-drop-container";

export default function DraggableAnswer(props) {
  // const landedOn = (e) => {
  //   console.log(e);
  // }; 
  
  return (
      // <DragDropContainer
      //   targetKey="1"
      //   dragData={props.label}
      //   onDrop={landedOn}
      //   // onDragEnd
      //   //   dragClone={true}
      //   //   {/* render={() => {
      //   //     return <div className="draggable-answer">מצרים</div>;
      //   //   }} */}
      // >
      //   <div className="draggable-answer">מצרים</div>
      // </DragDropContainer>
      <div className="boxable_component" style={{display: 'inline-block'}}>
          <DragDropContainer
            targetKey="1"
            dragData={props.label}
            onDragStart={()=>(console.log('start'))}
            onDrag={()=>(console.log('dragging'))}
            onDragEnd={()=>(console.log('end'))}
            onDrop={(e)=>(console.log(e))}
    
          >
            <div className="draggable-answer">מצרים</div>
          </DragDropContainer>
        </div>
  );
}
