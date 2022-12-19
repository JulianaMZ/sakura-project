import React from "react";

export default function Main({cards,setCards}) {
  
  const resetCards = () => {
    setCards(null);
  };
  console.log(cards);

  return (
    <div className="cards">
      <h1>Cartas</h1>
      <span className="back-home" onClick={resetCards}>Volver a la home</span>
      <div className="container-cards">
        {cards.map((card, index) => (
          <div className="card-container" key={index}>
          <img src={card.cardsReverse.clowReverse}alt={card.spanishName}/>
          </div>
        ))}
      </div>
    </div>
  )
}

