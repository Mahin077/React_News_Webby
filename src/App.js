import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

function App() {
  return (
    <>
    <Navbar/>
    <News country="us" category="science" pageSize={6}/>
    </>
  );
}

export default App;
