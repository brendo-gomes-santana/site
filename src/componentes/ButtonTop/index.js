import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function ButtonTop() {
  return (
    <a href='#eu' id='buttonSubir' style={{
      position: 'fixed',
      bottom: '3%',
      right:'3%'
    }}>
        <BsFillArrowUpCircleFill style={{
          fontSize: '3rem',
          color: 'var(--letra_foco)'
        }}/>
    </a>
  )
}
