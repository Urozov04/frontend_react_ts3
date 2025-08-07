import React from 'react'
import { FaHome } from 'react-icons/fa';

const Home = () => {
  return (
    <div className='text-blue-700'>
      <FaHome className='text-red-700'/>
      <p>Home</p>
    </div>
  )
}

export default React.memo(Home)