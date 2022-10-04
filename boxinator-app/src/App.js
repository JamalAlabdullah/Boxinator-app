import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Register from './views/Register';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div className="App">

        <Navbar />
        <Routes>

          <Route path="/register" element={ <Register /> }/>
          
        </Routes>

      </div>
    </BrowserRouter>


    </div>
  );
}

export default App;
