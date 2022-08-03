import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './protectedRoutes';
import NotFound from 'components/pages/notFound/notFound';
import Home from 'components/pages/home/home';
import Auth from 'components/pages/auth/auth';
import AdminPanel from 'components/pages/adminPanel/adminPanel';
import AppointmentRequest from 'components/appointments/appointmentRequest/appointmentRequest';

const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/:site' element={<Home />} />
      <Route path='/auth/:site' element={<Auth />} />
      <Route path='/appointment-request/:site' element={<AppointmentRequest />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/admin-panel/:site' element={<AdminPanel />} />
      </Route>
    </Routes>
  );
};

export default Router;
