import React ,{useState ,useEffect} from 'react';
import './App.css';
import AddToarmy from "./Addmyarmy"

function App() {

 const [bots , setBots] = useState([]);
 const [army , setArmy] = useState([]);



 const releaseFromArmy = (armyitem) => {
  console.log(armyitem);
  const updatedArmy = army.filter((b) => b.id !== armyitem.id);
  console.log(updatedArmy)
  setArmy(updatedArmy);
};

 const addToarmy = (bot)=>{
  console.log();

  if (!army.includes(bot)) {
    setArmy([...army,bot])
    
  }
 }
 useEffect(()=>{
fetch("https://db-botbattlr.onrender.com/bots")
.then((r) =>r.json())
.then((bot)=>{
  setBots(bot)
})

 },[])
 
 const mappeddata =   bots.map((bot) => {
   return (
    <li key={bot.id}>
      
      <img src={bot.avatar_url}/>
      <h3>{bot.name}</h3>
      <p id='catchphrase'>{bot.catchphrase}</p>
      <div className='carddiv'>
        <p>  {bot.health}</p>
        <p>{bot.damage}</p>
        <p>{bot.armor}</p>
      </div>
      <button onClick={()=>addToarmy(bot)}>
     Add to Army
      </button>
    </li>
  );
})

const dischargeBot = (armyitem) => {
    
  fetch(`https://db-botbattlr.onrender.com/bots/${armyitem.id}`, {
    method: "DELETE",
  })
    .then((r) => r.json())
    .then(() => console.log("deleted!"));
  //  just update the frontend state.
  const updatedBots = bots.filter((b) => b.id !== armyitem.id);
  setBots(updatedBots);

  // Also remove the bot from the army if it was enlisted
  const updatedArmy = army.filter((b) => b.id !== armyitem.id);
  setArmy(updatedArmy);
};




 
  return (
    <div>
      <h2>MY bots</h2>
      <AddToarmy 
    army ={army} 
    onRelease = {releaseFromArmy}  
    onDelete = { dischargeBot}
    />
    <div className="App">
     {mappeddata}
   
    </div>
    </div>
    
  );
}
export default App;
