import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import CoinDetails from './components/CoinDetails/CoinDetails';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Cryptos from './components/Cryptos/Cryptos';
import Footer from './components/Footer/Footer';



function App() {
  
  return (
    <>
    <Routes>
      <Route path='/' element={<Navbar />} >
        <Route index element={<Home />} />
        <Route path='news' element={<News />} />
        <Route path='coin/:uuid' element={<CoinDetails />} />
        <Route path='/cryptos' element={<Cryptos />} />
      </Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
