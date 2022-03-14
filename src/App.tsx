import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout';
import Landing from './pages/landing/Landing';
import Projects from './pages/projects/Projects';
import ProjectDetail from './pages/detail/ProjectDetail';
import Login from './pages/auth/Login';
import AnimatedPage from './components/_reusables/AnimatedPage';
import { useContext, useEffect } from 'react';
import { AuthContext } from './context/AuthContext';


const App: React.FC = () => {
  const { authState } = useContext(AuthContext);

  useEffect(() => {
    console.log('isAuthenticated: ', authState.isAuthenticated);

  }, [authState])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AnimatedPage><Landing /></AnimatedPage>} />
        <Route path="login" element={<AnimatedPage><Login /></AnimatedPage>} />
        <Route path="projeler">
          <Route index element={<AnimatedPage><Projects /></AnimatedPage>} />
          <Route path='detay' element={<AnimatedPage><ProjectDetail /></AnimatedPage>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
