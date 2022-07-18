import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParentContext from './context/ParentContext';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import InstrumentPage from './pages/InstrumentPage';

function App() {
  return (
    <>
      <ParentContext>
        <Layout>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/instrument' element={<InstrumentPage />} />
            </Routes>
          </Router>
        </Layout>
      </ParentContext>
    </>
  );
}

export default App;
