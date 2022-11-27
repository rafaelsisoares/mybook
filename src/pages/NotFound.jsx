import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <div>
        <h1>404</h1>
      </div>
      <div>
        <h1>Oops, não conseguimos encontrar essa página</h1>
        <Link to="/feed">Tente voltar para o Feed</Link>
      </div>
    </section>
  )
}
