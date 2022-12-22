import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/SecondPage.css';

function SecondPage() {

  return (
    <header>
      <div className='cards'>
        <h1>Escoge tres Cartas</h1>
      </div>
      <footer>
        <Link to='/' className="back-main">Pagina Principal</Link> 
      </footer>
    </header>
  );
}

export default SecondPage
