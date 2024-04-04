
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/HomePage/HomePage';
import MovieDetailPage from './pages/DetailPage/MovieDetailPage';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import TVShows from './pages/TVShowsPage/TVShows';
import TrendingPage from './pages/TrendingPage/TrendingPage';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:type/:movieId" element={<MovieDetailPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tvShows" element={<TVShows />} />
        <Route path="/trending" element={<TrendingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
