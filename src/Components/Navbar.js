import React, { } from 'react'
import './Navbar.css'
import Searchbar from './SearchComponent/Searchbar'

export default function Navbar() {

    return (
        <nav className='navbar'>
            <Searchbar />
        </nav>
    )
}
