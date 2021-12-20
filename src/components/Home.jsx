import React from 'react'
import User from "./Users";
import Search from './Search'
function Home() {
    return (
        <div>
            {/* Search component */}
            <Search/>
            <User/>
            
            
        </div>
    )
}

export default Home
