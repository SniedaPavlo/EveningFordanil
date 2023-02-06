import './scss/App.scss';
//pages
import Header from './Components/Header'
import Home from './pages/Home'
import Footer from './Components/Footer'



function App() {
  return (
    <div className='warapper'>
      <Header />
      <Home />
      {/* <Footer /> */}
    </div>

  );
}

export default App;
