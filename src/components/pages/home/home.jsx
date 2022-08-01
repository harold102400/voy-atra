import AppointmentsView from 'components/appointmentsView/appointmentsView';
import NavigateButton from 'components/buttons/navigateButton/navigateButton';

const Home = () => {
  return (
    <div>
      <h2>Listado de turnos</h2>
      <div className='mt-5'>
        <NavigateButton route={'/appointment-request'} variant='btn btn-secondary btn-lg btn-block' text={'Solicitar Turno'} />
      </div>
      <AppointmentsView />
    </div>
  );
};

export default Home;
