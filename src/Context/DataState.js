import React, { useState } from "react";
import DataContext from "./dataContext";
import moviesDetails from '../Data/moviesDetails'

const DataState = (props) => {
    const [movieData, setMovieData] = useState({})
    const [forBooking, setForBooking] = useState({});

    return (
        <DataContext.Provider value={{ movieData, setMovieData, moviesDetails, forBooking, setForBooking }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataState;