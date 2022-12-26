import React from 'react';
import "./App.css"
import {BrowserRouter, Router , Routes , Route} from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Home from "./components/home"

AOS.init();






function App() {
  return (
    <BrowserRouter>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
