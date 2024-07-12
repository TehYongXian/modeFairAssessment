import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Macbook from './views/Macbook';
import NavBar from './views/NavBar';

function App() {
  return (
    <Router>
      <div className="app ">
        <div className="app border-solid border-b border-#D3D3D5">
          <NavBar/>
        </div>
          <Routes>
          <Route
            exact path="/" element={<Macbook />}
            />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
