import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.tsx';
import IntroApp from './components/IntroApp.tsx';
import IntroApp30 from './components/IntroApp30.tsx';
import IntroAppVitass from './components/IntroAppVita.tsx';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/7d" element={<IntroApp />} />
        <Route path="/30d" element={<IntroApp30 />} />
        <Route path="/vita" element={<IntroAppVitass />} />
        <Route path="" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
