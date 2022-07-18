import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found'>
      <p>Pagina no encontrada.</p>
      <Link to='/'>Volver a inicio.</Link>
    </div>
  );
};

export default NotFound;
