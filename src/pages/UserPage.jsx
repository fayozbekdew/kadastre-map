import React, { useState } from 'react'
import Header from '../sections/Header'
import MapEl from '../sections/Map'

function UserPage() {
    const [searchEl,setSearchEl] = useState({})
  return (
    <div className="w-full h-screen">
    <Header setSearchEl={setSearchEl}/>
    <MapEl searchEl={searchEl}/>
    </div>
  )
}

export default UserPage