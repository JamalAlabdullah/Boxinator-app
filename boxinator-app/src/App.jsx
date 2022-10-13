import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import KeycloakRoute from './routes/KeycloakRoute';
//import {ROLES} from "./const/roles";

import Register from "./views/Register";

import HomePage from "./views/HomePage";
import Login from "./views/Login";
import Profile from "./views/Profile";

//import keycloak from './keycloak';

import './App.css';


/*
  <Route 
          path="/profile" 
          element={ 
        
            <KeycloakRoute role={ROLES.User}>
              <Profile /> 
            </KeycloakRoute>
          } 
          />
*/

function App() {
  return (
  
    <BrowserRouter>
      <Navbar/>
      <main className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={ <Register/> } />
          <Route path="/home" element={ <HomePage /> } />

          <Route path="/profile" element={<Profile /> } />
       
          
        </Routes>
      
      </main>
      
    </BrowserRouter>
  
  
     
  );
}

export default App;
