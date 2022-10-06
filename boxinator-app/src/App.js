import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Register from './views/Register';
import Profile from './views/Profile';
import HomePage from './views/HomePage';
import Login from './components/Login/LoginForm';


function App() {
  return (
      <BrowserRouter>
      <div className="App">

        <Navbar />
        <Routes>

          <Route path="/register" element={ <Register /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/" element={ <Login /> } />
          <Route path="/home" element={ <HomePage /> } />
          
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
