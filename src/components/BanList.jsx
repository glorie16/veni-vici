import './components.css';

const BanList = ({ bannedTraits, onUnban }) => {
    return (
        <div>
            <h3>Banned characteristics:</h3>
          <ul>
            {bannedTraits.map((trait, index) => (
                <button
                    className="bannedTraits"
                    key={index}
                    onClick={() => onUnban(trait)}
                >
                    {trait}</button>
            ))}
          </ul>
        </div>
    )
}

export default BanList;