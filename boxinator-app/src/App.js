import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Register from './views/Register';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <div className="App">

        <Routes>

          <Route path="/register" element={ <Register /> }/>
          
        </Routes>

      </div>
    </BrowserRouter>


    </div>
  );
}

export default App;
