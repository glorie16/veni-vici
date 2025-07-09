import { useState, useEffect } from 'react'
import './components.css';

const APIForm = ({ selectedVillager, onClick, onBan, bannedTraits }) => {
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
                        {!bannedTraits.includes(`Species: ${selectedVillager.species}`) && (
                            <button
                                className="Characteristics"
                                onClick={() => onBan(`Species: ${selectedVillager.species}`)}>
                                Species: {selectedVillager.species}
                            </button>
                        )}
                        {!bannedTraits.includes(`Personality: ${selectedVillager.personality}`) && (
                            <button
                                className="Characteristics"
                                onClick={() => onBan(`Personality: ${selectedVillager.personality}`)}>
                                Personality: {selectedVillager.personality}
                            </button>
                        )}
                        {!bannedTraits.includes(`Gender: ${selectedVillager.gender}`) && (
                            <button
                                className="Characteristics"
                                onClick={() => onBan(`Gender: ${selectedVillager.gender}`)}>
                                Gender: {selectedVillager.gender}
                            </button>
                        )}
                        {!bannedTraits.includes(`Zodiac Sign: ${selectedVillager.sign}`) && (
                            <button
                                className="Characteristics"
                                onClick={() => onBan(`Zodiac Sign: ${selectedVillager.sign}`)}>
                                Zodiac Sign: {selectedVillager.sign}
                            </button>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default APIForm;