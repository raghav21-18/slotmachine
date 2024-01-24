import React from "react";
import SlotM from "./SlotM";
  const EMachine =() => {
    return (
        <div className="slot_machine">
        <SlotM x= '😄' y= '😄' z= '😄'/>
        <SlotM x= '😄' y= '🎅' z= '😄'/>
        <SlotM x= '😠' y= '😠' z= '😠'/>
        <SlotM x= '😠' y= '🍓' z= '😠'/>
        <SlotM x= '🍓' y= '🍓' z= '🍓'/>
        </div>
    );
  }
  export default EMachine;