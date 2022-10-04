import './App.css';
import Register from './views/Register';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>

          <Route path="/register" element={ <Register /> }/>
          
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
