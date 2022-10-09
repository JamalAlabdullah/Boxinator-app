import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './views/HomePage';
import Login from './views/Login';
import Navbar from './components/Navbar/Navbar';
import Register from './views/Register';
import Profile from './views/Profile';
import './App.css'


import KeycloakRoute from './routes/KeycloakRoute';
import {ROLES} from "./const/roles";


function App() {
  return (
      <BrowserRouter>
  

        <Navbar />
        <main className='container'>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/home" element={ <HomePage /> } />

          <Route 
          path="/profile" 
          element={ 
            <KeycloakRoute role={ ROLES.User }>
          <Profile /> 
          </KeycloakRoute>

          } />
          
        
          
        </Routes>

        </main>

   
    </BrowserRouter>
  );
}

export default App;
