<<<<<<< HEAD
=======

import Login from './components/Login';

>>>>>>> jam-login
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
<<<<<<< HEAD
      <BrowserRouter>
      <div className="App">

        <Navbar />
        <Routes>

          <Route path="/register" element={ <Register /> }/>
          
        </Routes>

      </div>
    </BrowserRouter>
=======
    <div className="App">
     <Login/>
    </div>
>>>>>>> jam-login
  );
}

export default App;
