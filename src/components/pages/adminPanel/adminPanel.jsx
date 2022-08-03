import { useParams } from 'react-router-dom';
import AppointmentsAdmin from 'components/appointmentsAdmin/appointmentsAdmin';
import NavigateBtn from 'components/buttons/navigateBtn/navigateBtn';

const AdminPanel = () => {
  const params = useParams();

  return (
    <div>
      <h2>Panel de Administración</h2>
      <div className='mt-5'>
        <NavigateBtn route={`/appointment-request/${params.site}`} variant='btn btn-secondary btn-lg btn-block' text={'Agregar Turno'} />
      </div>
      <AppointmentsAdmin site={params.site} />
    </div>
  );
};

export default AdminPanel;
