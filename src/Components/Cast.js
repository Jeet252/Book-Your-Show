import React from 'react'
import './Cast.css'
import { ArrowRight2, ArrowLeft2 } from "iconsax-react";

export default function Cast({ castDetails }) {
    return (
        <div className='cast-container'>
            <h2 className='cast-profile-header'>Cast</h2>
            <div className='cast-profiles'>
                <button className='c-p-left-btn cp-btn'><ArrowLeft2 size="32" color="black" /></button>
                <div className='profile-above'></div>
                <div className='profile-below'>
                    {castDetails.map((elem, index) => (
                        <div key={index} className='profile-image-container'>
                            <img className='profile-image' src={elem.photo} alt="" />
                            <li>{elem.name}</li>
                        </div>

                    ))}
                </div>
                <button className='c-p-right-btn cp-btn'><ArrowRight2 size="32" color="black" /></button>
            </div>
        </div>
    )
}
