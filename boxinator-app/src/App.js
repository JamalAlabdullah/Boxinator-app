
import Login from './components/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Register from './views/Register';
import Navbar from './components/Navbar/Navbar';
import HomePage from './views/HomePage';


function App() {
  return (
      <BrowserRouter>
      <div className="App">

        <Navbar />
        <Routes>

          <Route path="/register" element={ <Register /> }/>
          <Route path="/" element={ <Login /> } />
          <Route path="/home" element={ <HomePage /> } />
          
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
