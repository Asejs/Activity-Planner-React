import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/HomePage';
import Activities from './pages/ActivitiesPage';
import LoginPage from "./pages/LoginPage";
import './App.css';

function App() {
  return (
      <div className="App">
        <Layout>
				  <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aktiviteter' element={<Activities />} />
            <Route path='/login' element={<LoginPage />} />
          </ Routes>
        </Layout>
      </div>
  );
}

export default App;