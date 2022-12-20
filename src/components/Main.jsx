import React from "react";
import { Link } from "react-router-dom";
import '../styles/Main.css';


export default function Main({cards,setCards}) {
  
  console.log(cards);

  return (
    <div className="cards">
      <h1>Escoge 3 cartas</h1>
        <div className="container-cards">
        {cards.map((card, index) => (
          <div className="card-container" key={index}>
            <img src={card.cardsReverse.clowReverse}alt={card.spanisName}/>
          </div>
        ))}
      </div>
      <Link to="/page2" className="back-home">Revela tus Cartas</Link>
    </div>
  )
}
