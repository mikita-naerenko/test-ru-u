import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TimerPage from './pages/timer-page';
import PalettePage from './pages/pallete-page';
import Header from './components/header/header'


function App() {
  return (
      <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<TimerPage />} />
        <Route path="/palette" element={<PalettePage />} />
      </Routes>
    </Router>
  );
}

export default App;
