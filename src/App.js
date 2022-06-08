import { React } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './Components/Main';
import ViewDeck from './Components/ViewDeck';

import './App.css';
import { Mod1 } from './Decks/Mod1';



function App() {

  return (
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Main decks={Mod1}/>} />

      <Route path='/:id' element={<ViewDeck decks={Mod1}/>} />

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
