import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Register from './views/Register';
import Login from './components/Login/Login';
import Profile from './views/Profile';


function App() {
  return (
      <BrowserRouter>
      <div className="App">

        <Navbar />
        <Routes>

          <Route path="/register" element={ <Register /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/" element={ <Login /> } />
          
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
