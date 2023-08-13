import './App.css';
import { Routes, Route } from "react-router-dom"

import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';

import { DataContext } from './Context/DataContext';
import AddNewMovie from './Pages/AddNewMovie/AddNewMovie';
import Page3 from './Pages/Page3/Page3';
import Page4 from './Pages/Page4/Page4';
export { DataContext }

function App() {
  return (
    <div className="App">
      <h1>MCR-11</h1>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/add-new-movie' element={<AddNewMovie/>}/>
        <Route path='/page3' element={<Page3/>}/>
        <Route path='/movie/:movieId' element={<Page4/>}/>
      </Routes>
    </div>
  );
}

export default App;
