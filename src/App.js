import imagenBolaCristal from './assets/img/bola-cristal.png';
import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import {Link} from 'react-router-dom';


function App() {
  const [cards, setCards] = useState(null);
  
  const reqApi = async () => {
    const api = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    const cardsApi = await api.json();
   console.log(cardsApi)
    setCards(cardsApi.results);
  };


  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>Sakura Tarot</h1>
        {cards ? (
          <Main cards={cards} setCards={setCards} />
        ) : (
          <div>
            <img src={imagenBolaCristal} alt="Bolita de Cristal" className='img-logo' />
            <Link to='/page2' onClick={reqApi} className="btn-search">Baraja las Cartas
            </Link>
          </div>
        )}
    
      </header>
    </div>
  );
}

export default App