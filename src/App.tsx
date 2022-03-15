/* eslint-disable react-hooks/exhaustive-deps */
import AnimatedPage from 'components/_reusables/AnimatedPage';
import ProjectDetail from 'pages/detail/ProjectDetail';
import { authService } from 'services/auth.service';
import { Route, Routes } from 'react-router-dom';
import Projects from 'pages/projects/Projects';
import Layout from 'components/layout/Layout';
import useAuthStore from 'stores/auth.store';
import Landing from 'pages/landing/Landing';
import { Toaster } from 'react-hot-toast';
import Login from 'pages/auth/Login';
import { useEffect } from 'react';


const App: React.FC = () => {

  useEffect(() => console.log(''));

  const setAuth = useAuthStore(store => store.setAuth)
  const setUser = useAuthStore(store => store.setUser)

  /* Authentication handling */
  useEffect(() => {
    authService.authCheck();
    authService.data.subscribe(data => data);
    authService.user.subscribe(user => {
      setUser(user);
      setAuth(user.id ? true : false)

    });
  }, [])

  return (
    <>
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
      <Toaster containerStyle={{
        top: 60,
        left: 20,
        bottom: 20,
        right: 20,
      }} />
    </>
  );
}

export default App;
