import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Main = ({ decks }) => {

  const navigate = useNavigate();
  const [currentDeck, setCurrentDeck] = useState('');


  const keys = Object.keys(decks);


  const handleSubmit = (e) => {

    e.preventDefault();

    navigate(`/${currentDeck}`);

  };



  return (
    <div className='anki-app'>
      <div className='main-cont'>
        
        <div className='view-home'>

          <select className='decks-sel' onChange={(e) => setCurrentDeck(e.target.value)}>
          <option value=''>Pick a deck</option>

          {keys && keys?.map((deck) => {
            return (
              <option 
              name={deck} 
              value={deck}
              key={deck}
              >
                {deck.toUpperCase()}
              </option>
            )
          })}

          </select>

          <button onClick={handleSubmit} className='main-btns'>Select</button>

        </div>

      </div>
    </div>
  );
}

export default Main;
