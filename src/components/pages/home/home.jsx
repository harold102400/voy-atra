import { useParams } from 'react-router-dom';
import AppointmentsView from 'components/appointmentsView/appointmentsView';
import NavigateBtn from 'components/buttons/navigateBtn/navigateBtn';

const Home = () => {
  const params = useParams();

  return (
    <div>
      <h2>Listado de turnos</h2>
      <div className='mt-5'>
        <NavigateBtn route={`/appointment-request/${params.site}`} variant='btn btn-secondary btn-lg btn-block' text={'Solicitar Turno'} />
      </div>
      <AppointmentsView site={params.site} />
    </div>
  );
};

export default Home;
