import "./App.css";
import Home from "./Screen/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./Screen/MovieDetail";
import DataState from "./Context/DataState";
import Cinemas from "./Screen/Cinemas";
import BookingArea from "./Screen/BookingArea";
import Thaters from "./Screen/Thaters";
// import YourBooking from "./Screen/YourBooking";

function App() {
  return (
    <DataState>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/Book-Your-Show" />
          <Route element={<MovieDetail />} path="/moviedetail" />
          <Route element={<Cinemas />} path="/cinemaselection" />
          <Route element={<BookingArea />} path="/bookingtickets" />
          <Route element={<Thaters />} path="/thaterinfo" />
          {/* <Route element={<YourBooking />} path="/yourbooking" /> */}
        </Routes>
      </BrowserRouter>
    </DataState>
  );
}

export default App;
