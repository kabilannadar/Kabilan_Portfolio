import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import CustomCursor from './components/CustomCursor';
import './index.css';

/* Notebook lines with draw-on animation */
function NotebookLines() {
  return (
    <>
      {/* Left margin line — draws top→bottom */}
      <div
        className="nb-left"
        style={{
          position: 'fixed', top: 0, left: '72px', bottom: 0,
          width: '1.5px', background: '#c8a882', opacity: 0.55,
          pointerEvents: 'none', zIndex: 999,
        }}
      />
      {/* Top rule line — draws left→right */}
      <div
        className="nb-top"
        style={{
          position: 'fixed', top: '72px', left: 0, right: 0,
          height: '1.5px', background: '#c8a882', opacity: 0.55,
          pointerEvents: 'none', zIndex: 999,
        }}
      />
    </>
  );
}

/* Re-mount pages on every route change so CSS animations replay */
function Pages() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/"           element={<Home       key={location.key} />} />
      <Route path="/about"      element={<About      key={location.key} />} />
      <Route path="/projects"   element={<Projects   key={location.key} />} />
      <Route path="/experience" element={<Experience key={location.key} />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <NotebookLines />
      <Pages />
    </BrowserRouter>
  );
}
