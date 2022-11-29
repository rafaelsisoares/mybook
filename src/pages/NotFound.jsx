import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/NotFound.css';

export default function NotFound() {
  return (
    <section>
      <div className='not-found-404'>
        <h1>404</h1>
      </div>
      <div className='not-found-message'>
        <h1>Oops, não conseguimos encontrar essa página</h1>
        <Link to="/feed" className='link'>Tente voltar para o Feed</Link>
      </div>
    </section>
  )
}
