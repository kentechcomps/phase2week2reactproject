import React from "react";


function Addmyarmy({army}){
  
const loopedArmy = army.map((armyitem)=>{

    return(
     
        <li key = {armyitem.id}>
        <p>{armyitem.id}</p>
        <img src={armyitem.avatar_url}/>
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