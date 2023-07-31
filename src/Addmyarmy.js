import React from "react";


function Addmyarmy({army ,  onRelease ,onDelete}){

  
const loopedArmy = army.map((armyitem)=>{
  
    return(
     
        <li key = {armyitem.id}>
        <p>{armyitem.id}</p>
        <img src={armyitem.avatar_url}/>
        <button  onClick={() => onRelease(armyitem)} >Releasebot</button>
        <button id="deletebtn" onClick={()=>onDelete(armyitem)}>Delete</button>
     </li>
)})
return(
  <div>
   <h3> My army</h3>
   {loopedArmy}
  </div>
)
}
export default Addmyarmy;