import React, { } from 'react'
import './Navbar.css'
import Searchbar from './SearchComponent/Searchbar'
import cinemaDetails from '../Data/cinemaDetails'
import moviedetails from '../Data/moviesDetails'


export default function Navbar() {
    const search_details = [...cinemaDetails, ...moviedetails];
    console.log(search_details)
    return (
        <nav className='navbar'>
            <Searchbar searchDetails={search_details} />
        </nav>
    )
}
