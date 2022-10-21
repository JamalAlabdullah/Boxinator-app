import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import KeycloakRoute from './routes/KeycloakRoute';
//import {ROLES} from "./const/roles";

import Register from "./views/Register";

import HomePage from "./views/HomePage";
import Login from "./views/Login";
import Profile from "./views/Profile";
import Footer from "./components/Footer/Footer";
import DebugPage from "./components/Admin/Debug/DebugPage";


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
    <>

      <BrowserRouter>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/home" element={<HomePage />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/debug" element={<DebugPage />} />


          </Routes>

        </main>

      </BrowserRouter>
      <Footer />

    </>



  );
}

export default App;
