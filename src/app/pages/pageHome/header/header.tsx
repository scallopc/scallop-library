import React from 'react'
import { Container } from './styles'

export function Header() {
 // const [show]

  const handleShowMenu = () =>{
console.log('mostra menu')
  }

  return (
    <Container>
      <div>header</div>
      <div><i onClick={() => handleShowMenu()} className="bi bi-list" /></div>
    </Container>
  )
}
