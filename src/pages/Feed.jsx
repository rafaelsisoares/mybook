import React from 'react'
import { Redirect } from 'react-router-dom';

import Header from '../components/Header'
import { getUserOnline } from '../utils/users'

export default function Feed() {
  const userOnline = JSON.parse(getUserOnline());
  if (Object.keys(userOnline).length === 0) return (<Redirect to="/" />)
  
  return (
    <section>
        <Header />
        <h1 className='space'>{' '}</h1>
        <p>keep calm</p>
        <p>and</p>
        <strong>Let's race</strong>
    </section>
  )
}
