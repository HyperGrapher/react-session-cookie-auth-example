/* eslint-disable react-hooks/exhaustive-deps */
import PageWrapper from 'components/page/PageWrapper';
import ProjectDetail from 'pages/project-detail/ProjectDetail';
import { authService } from 'services/auth.service';
import { Route, Routes } from 'react-router-dom';
import Projects from 'pages/projects/Projects';
import RootContainer from 'components/root/Root';
import useAuthStore from 'stores/auth.store';
import Landing from 'pages/landing/Landing';
import Login from 'pages/auth/Login';
import { useEffect } from 'react';
import Profile from 'pages/profile/Profile';
import Unauthorized from 'pages/unauthorized/Unauthorized';
import RequireAuth from 'components/auth-required/RequireAuth';


const App: React.FC = () => {

  useEffect(() => console.log('📢 App render'));

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
        <Route path="/" element={<RootContainer />}>
          <Route index element={<PageWrapper><Landing /></PageWrapper>} />
          <Route path="login" element={<PageWrapper><Login /></PageWrapper>} />
          <Route path="unauthorized" element={<PageWrapper><Unauthorized /></PageWrapper>} />
          <Route path="projeler">
            <Route index element={<PageWrapper><Projects /></PageWrapper>} />
            <Route path='detay' element={<PageWrapper><ProjectDetail /></PageWrapper>} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path="profile" element={<PageWrapper><Profile /></PageWrapper>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
