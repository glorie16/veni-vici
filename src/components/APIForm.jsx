import { useState, useEffect } from 'react'

const APIForm = ({ selectedVillager, onClick }) => {
    return (
        <div>
            <h2>Animal Crossing Villager Generator</h2>
            <h3>Click the button to check out a random villager from Animal Crossing: New Horizons!</h3>
            <button onClick={onClick}>Generate Villager</button>

            {selectedVillager && (
                <div>
                    
                    <h3>{selectedVillager.name['name-USen']}</h3>
                    <img src={selectedVillager.image_uri} alt={selectedVillager.name['name-USen']} width="150" />
                    <ul>
                        <li>Species: {selectedVillager.species}</li>
                        <li>Personality: {selectedVillager.personality}</li>
                        <li>Gender: {selectedVillager.gender}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default APIForm;