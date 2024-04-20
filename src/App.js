import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import WeatherForecast from './one'; // Assuming './one' is the correct path to your WeatherForecast component
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WeatherForecast />} />
          {/* 
            Replace '/' with the appropriate path if 'one' is not the correct path to your WeatherForecast component
          */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;