import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Female from './female';
import Male from './male';

function App() {
  return (
    <Router basename='/'>
      <div>
        <Header title = "WAR"/>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/female" element={<Female />} />
          <Route path="/male" element={<Male />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App;
