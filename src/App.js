import './App.css';
import './index.css';
import Header from './Components/Header/Header';
import About from './Containers/About/About';
import Home from './Containers/Home/Home';
import Links from './Containers/Links/Links';
import Navbar from './Containers/Navbar/Navbar';
import Portfolio from './Containers/Portfolio/Portfolio';
import UpArrow from './Components/UpArrow/UpArrow';


function App() {
  return (
    <div className="App" id="home">
      <Navbar></Navbar>
      <Home ></Home>
      <Links></Links>
      <About></About>
      <Portfolio></Portfolio>
      <UpArrow></UpArrow>
    </div>
  );
}

export default App;
