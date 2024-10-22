import React from 'react'
import './BookingHeader.css'

export default function BookingHeader({ details }) {
    return (
        <nav className='booking-header'>
            <div className='b-h-ele1'>
                {details.show.filter((elem) => elem.name === details.movieName).map((elem) => (
                    <li className='booking-header-li'>{elem.time}</li>
                ))

                }

            </div>

            <hr className='b-h-hr' />
        </nav>
    )
}
