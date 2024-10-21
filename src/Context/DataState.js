import React, { useState } from "react";
import DataContext from "./dataContext";
import profile from '../Data/profile'

const DataState = (props) => {
    const [movieData, setMovieData] = useState({})
    const [forBooking, setForBooking] = useState({});

    return (
        <DataContext.Provider value={{ movieData, setMovieData, profile, forBooking, setForBooking }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataState;