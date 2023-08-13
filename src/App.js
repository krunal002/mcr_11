import './App.css';
import { Routes, Route } from "react-router-dom"

import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';


function App() {
  return (
    <div className="App">
      <h1>MCR-11</h1>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
      </Routes>
    </div>
  );
}

export default App;
