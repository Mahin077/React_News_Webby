import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
function App() {
  const pageSize = 9;
  const apiKey ="005e86f524924fa7836c731cfec3e7cb";
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [mode,setMode] = useState('light');    // useState for dark mode
  
  const toggleMode = ()=>{            // to enable or disable dark mode
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(24 24 24)';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <LoadingBar
        height={3}
        color='#f11946'
        progress={loadingProgress} 
      />
    <Routes>
          <Route exact path="/" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" mode={mode}/>}></Route> 
          <Route exact path="/business" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" mode={mode}/>}></Route> 
          <Route exact path="/entertainment" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" mode={mode}/>}></Route> 
          <Route exact path="/general" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general" mode={mode}/>}></Route> 
          <Route exact path="/health" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health" mode={mode}/>}></Route> 
          <Route exact path="/science" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science" mode={mode}/>}></Route> 
          <Route exact path="/sports" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports" mode={mode}/>}></Route> 
          <Route exact path="/technology" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology" mode={mode}/>}></Route> 
        </Routes>
    </Router>
    </>
  );
}

export default App;
