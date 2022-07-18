import { Routes, Route } from 'react-router-dom';
import NotFound from '../components/pages/notFound/notFound';
import Home from '../components/pages/home/home';

const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default Router;
