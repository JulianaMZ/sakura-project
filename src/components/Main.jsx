import React from "react";
import { Link } from "react-router-dom";
import '../styles/main.css';



export default function Main({cards,setCards}) {
  
  console.log(cards);

  return (
    <div className="cards">
      <h1>Escoge 3 cartas</h1>
        <div className="container-cards">
        {cards.map((card, index) => (
          <div className="card-container" key={index}>
            <button>
            <img src={card.cardsReverse.clowReverse}alt={card.spanisName}/>
            </button>
          </div>
        ))}
      </div>
      <Link to="/page2" className="back-home">Revela tus Cartas</Link>
    </div>
  )
}

/*<>
        <div className="group" id="card-color">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <ReactCardFlip isFlipped={isFlipped}>
                    <img src ={backFace} alt ='back face card' className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-3xl" onClick={handleClick}/>
                    <img key = {key} src ={image} alt ={name} className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-3xl" onClick={handleClick}/>
                </ReactCardFlip>
            </div>
        </div>
    </>*/