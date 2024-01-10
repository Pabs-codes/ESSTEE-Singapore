import './App.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
   <>
      <Navbar />
      <Home />
      <Portfolio/>
      <Main />
      <Footer />
   </>  
  );
}

export default App;
