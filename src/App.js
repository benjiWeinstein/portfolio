import './App.css';
import './index.css';
import Header from './Components/Header/Header';
import About from './Containers/About/About';
import Home from './Containers/Home/Home';
import Links from './Containers/Links/Links';
import Navbar from './Containers/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home id="home"></Home>
      <Links></Links>
      {/* <About id="about"></About> */}
    </div>
  );
}

export default App;
