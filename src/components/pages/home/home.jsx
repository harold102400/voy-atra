import AppointmentsView from 'components/appointmentsView/appointmentsView';
import NavigateBtn from 'components/buttons/navigateBtn/navigateBtn';

const Home = () => {
  return (
    <div>
      <h2>Listado de turnos</h2>
      <div className='mt-5'>
        <NavigateBtn route={'/appointment-request'} variant='btn btn-secondary btn-lg btn-block' text={'Solicitar Turno'} />
      </div>
      <AppointmentsView />
    </div>
  );
};

export default Home;
