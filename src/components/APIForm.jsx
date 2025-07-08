import { useState, useEffect } from 'react'
import './components.css';

const APIForm = ({ selectedVillager, onClick }) => {
    return (
        <div className="APIForm">
            <h2>Animal Crossing Villager Generator</h2>
            <h3>Click the button to check out a random villager from the Animal Crossing series!</h3>
            <button onClick={onClick}>Generate Villager</button>

            {selectedVillager && (
                <div>

                    <h3>{selectedVillager.name}</h3>
                    <img className="picture"src={selectedVillager.image_url} alt={selectedVillager.name} />
                    <ul className="Characteristics-list">
                        <li className="Characteristics">Species: {selectedVillager.species}</li>
                        <li className="Characteristics">Personality: {selectedVillager.personality}</li>
                        <li className="Characteristics">Gender: {selectedVillager.gender}</li>
                        <li className="Characteristics">Zodiac Sign: {selectedVillager.sign}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default APIForm;