import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Macbook from './views/Macbook';
import NavBar from './views/NavBar';
import Inch14M3Max from './views/itemDetails/Inch14M3Max';

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
          <Route
            exact path="/inch14M3Max" element={<Inch14M3Max />}
            />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
