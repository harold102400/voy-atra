import AppointmentsAdmin from "components/appointmentsAdmin/appointmentsAdmin";
import NavigateBtn from 'components/buttons/navigateBtn/navigateBtn';

const AdminPanel = () => {
  return (
    <div>
      <h2>Panel de Administración</h2>
      <div className='mt-5'>
        <NavigateBtn route={'/appointment-request'} variant='btn btn-secondary btn-lg btn-block' text={'Agregar Turno'} />
      </div>
      <AppointmentsAdmin />
    </div>
  );
};

export default AdminPanel;
