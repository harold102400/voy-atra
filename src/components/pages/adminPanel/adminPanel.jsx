import { UserAuth } from 'context/authContext';
import AppointmentsAdmin from 'components/appointments/appointmentsAdmin/appointmentsAdmin';
import NavigateBtn from 'components/buttons/navigateBtn/navigateBtn';

const AdminPanel = () => {
  const { userSite } = UserAuth();

  return (
    <div>
      <h2>Panel de Administración</h2>
      <div className='mt-5'>
        <NavigateBtn route={`/appointment-request/${userSite}`} variant='btn btn-secondary btn-lg btn-block' text={'Agregar Turno'} />
      </div>
      {userSite && <AppointmentsAdmin site={userSite} />}
    </div>
  );
};

export default AdminPanel;
