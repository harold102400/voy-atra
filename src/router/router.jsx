import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './protectedRoutes';
import NotFound from '../components/pages/notFound/notFound';
import Home from '../components/pages/home/home';
import Auth from '../components/pages/auth/auth';
import AdminPanel from '../components/pages/adminPanel/adminPanel';

const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/admin-panel' element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};

export default Router;
