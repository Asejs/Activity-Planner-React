import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/homePage/HomePage';
import ActivitiesPage from './pages/activitiesPage/ActivitiesPage';
import LoginPage from "./pages/loginPage/LoginPage";
import './App.css';

function App() {
  return (
      <div className="App">
        <Layout>
				  <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/aktiviteter' element={<ActivitiesPage />} />
            <Route path='/login' element={<LoginPage />} />
          </ Routes>
        </Layout>
      </div>
  );
}

export default App;