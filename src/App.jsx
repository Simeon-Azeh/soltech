import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import TechTraining from './pages/TechTraining';
import Gaming from './pages/Gaming';
import Workspaces from './pages/Workspaces';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/tech-training" element={<TechTraining />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/workspaces" element={<Workspaces />} />
      </Routes>
    </Router>
  );
}

export default App;