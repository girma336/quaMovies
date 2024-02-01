import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { fetchAllMovies } from './Store/moveSlice';
import Dashboard from './pages/Dashboard';
import MovieDetaile from './components/MovieDetaile';

function App() {
  const [detaile, setDetail] = useState('');

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllMovies());
  })
  console.log(detaile)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard setDetail={setDetail} />} />
          <Route path='/details' element={<MovieDetaile detail={detaile} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
