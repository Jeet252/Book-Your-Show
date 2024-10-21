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
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<MovieDetail />} path='/moviedetail' />
          <Route element={<Cinemas />} path='/moviesdetail/cinemaselection' />
          <Route element={<BookingArea />} path='/moviesdetail/cinemaselection/bookingtickets' />

        </Routes>
      </BrowserRouter>
    </DataState>
  );
}

export default App;
