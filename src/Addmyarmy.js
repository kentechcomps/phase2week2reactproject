import React from "react";


function Addmyarmy({army ,  onRelease ,onDelete}){

  
const loopedArmy = army.map((armyitem)=>{
  
    return(
     
        <li key = {armyitem.id}>
        <p>{armyitem.id}</p>
        <img src={armyitem.avatar_url}/>
        <button id="relesebtn"  onClick={() => onRelease(armyitem)} >Releasebot</button>
        <button id="deletebtn" onClick={()=>onDelete(armyitem)}>Delete</button>
     </li>
)})
return(
  <div className="myarmy">
    <h3> My army</h3>
  <div className="myarmylist">
   {loopedArmy}
  </div>

  </div>
  
)
}
export default Addmyarmy;