import './scss/App.scss';
//pages
import Home from './pages/Home'
import Product from './pages/Product'
//components
import Header from './Components/Header'

import Footer from './Components/Footer'

import { Routes, Route } from 'react-router-dom'




function App() {
  return (
    <div className='warapper'>
      <Header />
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/items/:id" element={< Product />} />
      </Routes>

      {/* <Footer /> */}
    </div>

  );
}

export default App;
