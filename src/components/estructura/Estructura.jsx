import React from 'react'
import Foot from './dependence/Foot'
import Nav from './dependence/Nav'

export default function Estructura(props) {
  return (
    <>
      <Nav />
      {props.children}
      <Foot />
    </>
  )
}
