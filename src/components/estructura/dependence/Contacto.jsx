import React from 'react'
import { IoLogoTwitter, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'

export default function Contacto({ type }) {
  let icono, link
  switch (type) {
    case 'Twitter':
      icono = <IoLogoTwitter color="white" size="40" />
      link = 'https://twitter.com/yorshcp'
      break
    case 'Instagram':
      icono = <IoLogoInstagram color="white" size="40" />
      link = 'https://www.instagram.com/yorsh2002/'
      break
    case 'Youtube':
      icono = <IoLogoYoutube color="white" size="40" />
      link = 'https://www.youtube.com/channel/UC2B0eSt6EwEkurCPQYJ-f6Q'
      break
    default:
      return
  }

  return (
    <a href={link} target="_blank" rel="noreferrer noopener">
      {icono}
    </a>
  )
}
