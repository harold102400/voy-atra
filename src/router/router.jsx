import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './protectedRoutes';
import NotFound from 'components/pages/notFound/notFound';
import Home from 'components/pages/home/home';
import Auth from 'components/pages/auth/auth';
import AdminPanel from 'components/pages/adminPanel/adminPanel';
import AppointmentRequest from 'components/appointmentRequest/appointmentRequest';

const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/:collection' element={<Home />} />
      <Route path='/auth/:collection' element={<Auth />} />
      <Route path='/appointment-request/:collection' element={<AppointmentRequest />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/admin-panel/:collection' element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};

export default Router;
