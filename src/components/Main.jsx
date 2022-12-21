import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.css';
import ReactCardFlip from 'react-card-flip';


export default function Main({cards,setCards}) {
  
  console.log(cards);
const Main = ({cardNumber, spanishName, clowCard}) => {
  const [isFlipped, setIsFlipped] = useState(false);
}
  return (
    <div className="cards">
      <h1>Escoge 3 cartas</h1>
        <div className="container-cards">
        {cards.map((card, index) => (
          <div className="card-container" key={index}>
            <ReactCardFlip isFlipped={isFlipped} >
              <img src={card.cardsReverse.clowReverse}alt={card.spanisName} />
            </ReactCardFlip>
          </div>
        ))}
      </div>
      <Link to="/page2" className="back-home">Revela tus Cartas</Link>
    </div>
  )
}
