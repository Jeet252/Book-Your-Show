import './App.css';
import Home from './Screen/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieDetail from './Screen/MovieDetail';
import DataState from './Context/DataState'
import Cinemas from './Screen/Cinemas';
import BookingArea from './Screen/BookingArea';

function App() {
  return (
    <DataState>
      <BrowserRouter >
        <Routes>
          <Route element={<Home />} path='/Book-Your-Show' />
          <Route element={<MovieDetail />} path='/moviedetail' />
          <Route element={<Cinemas />} path='/cinemaselection' />
          <Route element={<BookingArea />} path='/bookingtickets' />

        </Routes>
      </BrowserRouter>
    </DataState>
  );
}

export default App;
