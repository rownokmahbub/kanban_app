import React, { useState } from 'react'
import { X } from 'react-feather'
import "./Editable.css"
const Editable = (props) => {
    const [showEdit, setShowEdit]= useState(false);
  return (
    <div className='editable'>
    {
        showEdit ?
    
        <form className={`editable_edit ${props.editClass || ""}`} onSubmit={(e)=>{
            e.preventDefault();
            if(props.onSubmit){
                props.onSubmit(e);
            }
        }}>
            <input type="text" name="" id="" placeholder={props.placeholder} defaultValue={props.text}/>
            <div className="editable_edit_footer">
                <button type="submit"> {props.buttonText || "Add"}</button>
                <X className='cross' onClick={()=>setShowEdit(false)}/>
            </div>
        </form>
        : <p className={`editable_display ${props.displayClass || ""}`} onClick={()=>setShowEdit(true)}>{props.text || "Add Item"}</p> }
    </div>
  )
}

export default Editable