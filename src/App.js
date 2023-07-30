import React ,{useState ,useEffect} from 'react';
import './App.css';
import AddToarmy from "./Addmyarmy"

function App() {

 const [bots , setBots] = useState([]);
 const [army , setArmy] = useState([]);



 const releaseFromArmy = (armyitem) => {
  const updatedArmy = army.filter((b) => b.id !== armyitem.id);
  setArmy(updatedArmy);
};

 const addToarmy = (bot)=>{
  console.log();

  if (!army.includes(bot)) {
    setArmy([...army,bot])
    
  }
 }
 useEffect(()=>{
fetch("http://localhost:3000/bots")
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
      <p>{bot.catchphrase}</p>
      <div className='carddiv'>
        <p>{bot.health}</p>
        <p>{bot.damage}</p>
        <p>{bot.armor}</p>
      </div>
      <button onClick={()=>addToarmy(bot)}>
     Add to Army
      </button>
    </li>
  );
})
 
  return (
  
    <div className="App">
     {mappeddata}
    <AddToarmy 
    army ={army} 
    onRelease = {releaseFromArmy}  
    />
    </div>
  );
}
export default App;
