import './App.css';
import Home from './pages/Home'
import Navbar from "./component/Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
      <Routes>
        <Route
         path='/'
         element={<Home />}
         />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
