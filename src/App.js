import imagenBolaCristal from './assets/img/bola-cristal.png';
import './App.css';
import { useState, useEffect } from 'react';
import Main from './components/Main';
//import {Link} from 'react-router-dom';
import { shuffle } from 'lodash';


function App() {
  const [cards, setCards] = useState(null);
  
  /*const reqApi = async () => {
    const api = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    const cardsApi = await api.json();
    console.log(cardsApi)
    setCards(cardsApi);
  };*/

  useEffect(() => {
    fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    .then((response) => response.json())
    .then((data) => setCards(shuffle(data)));


   // console.log(cardsApi)
   // setCards(cardsApi);
  }, [])
  

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='title'>Sakura Tarot</h1>
        <p>Pasado, Presente y Futuro</p>
        <img src={imagenBolaCristal} alt="Bola de cristal" className='img-home' />
        {cards? <Main cards={cards}/>:
        <div></div>}
      </header>
    </div>
  );
}

export default App