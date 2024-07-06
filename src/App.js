import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='news' element={<News />} />
        <Route path='coins/:id' element={<CoinDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
