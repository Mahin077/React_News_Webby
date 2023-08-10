import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import React,{useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
function App() {
  const pageSize = 9;
  const apiKey ="d093053d72bc40248998159804e0e67d";
  const [loadingProgress, setLoadingProgress] = useState(0)
  return (
    <>
    <Router>
    <Navbar/>
    <LoadingBar
        height={3}
        color='#f11946'
        progress={loadingProgress} 
      />
    <Routes>
          <Route exact path="/" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
          <Route exact path="/business" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}></Route> 
          <Route exact path="/entertainment" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route> 
          <Route exact path="/general" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}></Route> 
          <Route exact path="/health" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}></Route> 
          <Route exact path="/science" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}></Route> 
          <Route exact path="/sports" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route> 
          <Route exact path="/technology" element={<News setLoadingProgress={setLoadingProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route> 
        </Routes>
    </Router>
    </>
  );
}

export default App;
