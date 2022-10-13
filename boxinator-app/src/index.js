import React from "react";
import ReactDOM from "react-dom/client";
import { initialize } from "./keycloak";
import Loading from "./components/loading/loading";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import AppContext from "./context/AppContext";



const root = ReactDOM.createRoot(document.getElementById("root"));


// To show connectiong message to keycloak
root.render(<Loading message="Connecting to Keycloak..." />)



// Initialize Keycloak with catch error if it does not work. 
initialize()
  .then(() => { 
    root.render(
      <React.StrictMode>
        <AppContext>
        <App />
        </AppContext>
      </React.StrictMode>
    );
  })
  .catch(() => {
    root.render(
      <React.StrictMode>
        <p>Could Not Connect To Keycloak.</p>
      </React.StrictMode>
    );
  });
