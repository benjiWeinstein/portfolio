import './App.css';
import './index.css';
import Header from './Components/Header/Header';
import About from './Containers/About/About';
import Home from './Containers/Home/Home';
import Links from './Containers/Links/Links';
import Navbar from './Containers/Navbar/Navbar';
import Portfolio from './Containers/Portfolio/Portfolio';


function App() {
  return (
    <div className="App" id="home">
      <Navbar></Navbar>
      <Home ></Home>
      <Links></Links>
      <About></About>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
