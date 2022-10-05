
import Login from './components/Login/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Register from './views/Register';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
      <BrowserRouter>
      <div className="App">

        <Navbar />
        <Routes>

          <Route path="/register" element={ <Register /> }/>
          <Route path="/" element={ <Login /> } />
          
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
