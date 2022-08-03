import './home.css';
import { useParams } from 'react-router-dom';
import { UserAuth } from 'context/userContext';
import AppointmentsView from 'components/appointments/appointmentsView/appointmentsView';
import NavigateBtn from 'components/buttons/navigateBtn/navigateBtn';

const Home = () => {
  const params = useParams();
  const { userSite } = UserAuth();

  return (
    <div>
      <h2>Listado de turnos</h2>
      <div className='mt-5'>
        <NavigateBtn route={`/appointment-request/${params.site}`} variant='btn btn-secondary btn-lg btn-block' text={'Solicitar Turno'} />
        {userSite && <NavigateBtn route={`/admin-panel/${userSite}`} variant='outline-dark btn-lg btn-block' text={'Ir a Panel de Administración'} />}
      </div>
      <AppointmentsView site={params.site} />
    </div>
  );
};

export default Home;
