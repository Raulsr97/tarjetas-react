import React from 'react'
import '../styles/testimonio.css'

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../images/${props.image}.png`)}
        alt='Foto de Emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.name}</strong> in {props.country}</p>
        <p className='cargo-testimonio'>{props.position} at <b>{props.company}</b></p>
        <p className='texto-testimonio'>"{props.testimony}"</p>
      </div>
    </div>
  )
}

export default Testimonio 