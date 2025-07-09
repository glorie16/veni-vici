import { useState, useEffect } from 'react'
import './App.css'
import APIForm from './components/APIForm'
import PastList from './components/PastList'
import BanList from './components/BanList'

function App() {

  const [villagers, setVillagers] = useState([])
  // State to hold the selected villager and banned traits
  const [filteredVillagers, setFilteredVillagers] = useState([])
  const [selectedVillager, setSelectedVillager] = useState(null)
  const [bannedTraits, setBannedTraits] = useState([])
  const [pastVillagers, setPastVillagers] = useState([])

  //logic for fetching villagers from the API
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
        console.log("Villagers fetched successfully:", villagerArray);
      } catch (error) {
        console.error("Error fetching villagers:", error);
      }
    };
    fetchVillagers();
  }, []);

  //logic for filtering villagers based on banned traits
  // due to useEffect, this code runs whenever bannedTraits or villagers change
  useEffect(() => {
      if (bannedTraits.length > 0) {
        const filtered = villagers.filter(villager => {
          return !bannedTraits.includes(`Species: ${villager.species}`) &&
            !bannedTraits.includes(`Personality: ${villager.personality}`) &&
            !bannedTraits.includes(`Gender: ${villager.gender}`) &&
            !bannedTraits.includes(`Zodiac Sign: ${villager.sign}`);
        });

        setFilteredVillagers(filtered);

      } else {
        setFilteredVillagers(villagers);
      }
  }, [bannedTraits, villagers]);
  
  const generateVillager = () => {
    //checks if villagers loaded properly from API
    if(villagers.length === 0) {
      //alert("No villagers available to generate.");
      return;
    }
  
      if (filteredVillagers.length === 0) {
        alert("No villagers available with the current banned traits.");
        setSelectedVillager(null);
        return;
      }
      let randomIndex = Math.floor(Math.random() * filteredVillagers.length);
      let villager = filteredVillagers[randomIndex];
      setSelectedVillager(villager);
      setPastVillagers(prev => [...prev, villager]);
    }

  //function to handle banning a trait
  const handleBan = (trait) => {
    if (!bannedTraits.includes(trait)) {
      setBannedTraits(prev => [...prev, trait]);
    }
  }

  //function to handle unbanning a trait
  const handleUnban = (trait) => {
  setBannedTraits(prev => prev.filter(t => t !== trait));
};
  
  return (
    <div className="App">
      <div className="pastlist">
        <PastList></PastList>
      </div>

      <div className="apiform">
        <APIForm
          onClick={generateVillager}
          selectedVillager={selectedVillager}
          bannedTraits={bannedTraits}
          onBan={handleBan}
        >
    
        </APIForm>
        </div>
      
      <div className="banlist">
        <BanList
          bannedTraits={bannedTraits}
          onUnban={handleUnban}>
      </BanList>
      </div>
    </div>
    
    
  )
}


export default App
