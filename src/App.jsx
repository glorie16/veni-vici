import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import APIForm from './components/APIForm'
import PastList from './components/PastList'
import BanList from './components/BanList'

function App() {
  const [villagers, setVillagers] = useState([])
  const [selectedVillager, setSelectedVillager] = useState(null)
  const [bannedTraits, setBannedTraits] = useState([])
  const [pastVillagers, setPastVillagers] = useState([])

  useEffect(() => {
    const fetchVillagers = async () => {
      try {
        const apiKey = import.meta.env.VITE_APP_ACCESS_KEY;
        const res = await fetch("https://api.nookipedia.com/villagers",
          {
            //format needed for nookipedia API
            headers: {
              "X-API-KEY": apiKey,
              "X-API-HOST": "api.nookipedia.com",
              "Accept": "application/json"
            }
          });
        const data = await res.json();
        const villagerArray = Object.values(data);
        setVillagers(villagerArray);
      } catch (error) {
        console.error("Error fetching villagers:", error);
      }
    };
    fetchVillagers();
  }, []);

  const generateVillager = () => {
    if(villagers.length === 0) {
      //alert("No villagers available to generate.");
      return;
    }
    else {
      const randomIndex = Math.floor(Math.random() * villagers.length);
      const villager = villagers[randomIndex];
      setSelectedVillager(villager);
      setPastVillagers(prev => [...prev, villager]);
      console.log(`Generated Villager: ${villager.name}`);
    }
  }

  return (
    <div className="App">
      <div className="pastlist">
        <PastList></PastList>
      </div>

      <div className="apiform">
        <APIForm onClick={generateVillager} selectedVillager={selectedVillager}>
    
        </APIForm>
        </div>
      
      <div className="banlist">
      <BanList></BanList>
      </div>
    </div>
    
    
  )
}

export default App
