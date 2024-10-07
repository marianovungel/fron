import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Room from './pages/Room';
import Video from './pages/Video/Video';

function App() {
  return (
    <Router>
        <Routes> 
          <Route path="/" element={ <Video /> } exact />
          <Route path="/video/:id" element={  <Room />  } exact />
          <Route path="*" element={<div>Sem conteudo</div>} />
        </Routes>
      </Router>
  );
}

export default App;
