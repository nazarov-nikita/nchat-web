import React from 'react'
import { Link } from 'react-router-dom'
// import { Image } from 'react-bootstrap'
import './style.css'
import '../../Images/sad.png'

const NotFound = () => (
  <div className='notFound'>
    <img id='notFoundImg' src='../../Images/sad.png' />
    <h1>Route not found. Try <Link to='/'>this link</Link></h1>
  </div>
)

export default NotFound
