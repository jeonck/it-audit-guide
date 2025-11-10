import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import InspectionCoreComponents from './pages/guide/InspectionCoreComponents';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide/inspection-core-components" element={<InspectionCoreComponents />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
