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
      try{
      const res = await fetch('https://acnhapi.com/v1/villagers/');
        const data = await res.json();
        const villagerArray = Object.values(data);
        console.log(villagerArray);
      } catch (error) {
        console.error("Error fetching villagers:", error);
      }
      setVillagers(villagerArray);
    };
    fetchVillagers();
  }, []);

  const generateVillager = () => {
    if(villagers.length === 0) {
      alert("No villagers available to generate.");
      return;
    }
    else {
      const randomIndex = Math.floor(Math.random() * villagers.length);
      const villager = villagers[randomIndex];
      setSelectedVillager(villager);
      setPastVillagers(prev => [...prev, villager]);
      console.log(`Generated Villager: ${villager.name['name-USen']}`);
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
