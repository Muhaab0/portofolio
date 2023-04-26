import React from 'react'
import NavBar from './NavBar'
import Footer from './footer'

export default function Layout(props) {
  return (
    <>
    <NavBar/>
    {props.children}
    <Footer />
    </>
  )
}
