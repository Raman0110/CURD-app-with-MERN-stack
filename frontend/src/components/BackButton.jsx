import React from 'react'
import { Link } from 'react-router-dom'

const BackButton = ({ destination = '/' }) => {
  return (
    <Link to={destination}>
      <button className='bg-purple-400 text-white px-5 py-3 rounded-xl'>Back</button>
    </Link>
  )
}

export default BackButton