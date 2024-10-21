import React from 'react'
import './SearchResult.css'

export default function SearchResult({ result }) {
    return (
        <div className='search-result'>
            {result.map((items, index) => (
                <div key={index} >{items.name}</div>
            ))}
        </div>
    )
}
