import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Macbook from './views/Macbook';

function App() {
  return (
    <Router>
      <div className="app">
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
