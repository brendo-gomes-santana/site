import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

import { BiError } from 'react-icons/bi'
export default function Error() {
    useEffect(()=> {
        document.title = 'Pág Error - Brendo Gomes Santana'
    },[])

  return (
    <main className='ContainerError'>
        <section className='boxError'>
          <BiError size={80} color='#fff'/>
          <p >Página não existe</p>
          <Link to='/'>Volta para página inicial</Link>
        </section>
    </main>
  )
}
