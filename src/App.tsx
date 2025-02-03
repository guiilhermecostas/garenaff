import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm.tsx';
import IntroApp from './components/IntroApp.tsx';
import Apresentacao from './components/Etapa01.tsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroApp />} />
        <Route path="/logado" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
