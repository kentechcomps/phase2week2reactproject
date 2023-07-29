import React ,{useState ,useEffect} from 'react';
import './App.css';

function App() {

 const [bots , setBots] = useState([]);

 useEffect(()=>{
fetch("http://localhost:4000/bots")
.then((r) =>r.json())
.then((bot)=>{
  setBots(bot)
})

 },[])
 
 const mappeddata =   bots.map((bot) => {
  console.log(bot);
   return (
    <li key={bot.id}>
      <p>{bot.name}</p>
      <h3>{bot.health}</h3>
    </li>
  );
})
 
  return (
    <div className="App">
      <ul>
      {mappeddata}
      </ul>
 
    </div>
  );
}
export default App;
