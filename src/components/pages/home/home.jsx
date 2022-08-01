import AppointmentsView from 'components/appointmentsView/appointmentsView';
import RequestAppointmentBtn from 'components/appointmentRequest/appointmentRequest';

const Home = () => {
  return (
    <div>
      <h2>Listado de turnos</h2>
      <RequestAppointmentBtn />
      <AppointmentsView />
    </div>
  );
};

export default Home;
