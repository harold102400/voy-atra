import { useState, useEffect } from 'react';
import AppointmentService from 'services/appointment.service';
import Spinner from 'components/spinner/spinner';
import Helper from 'utils/helper';

const AppointmentsView = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      await AppointmentService.getAllAppointments()
        .then((response) => {
          setAppointments(response);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoadingData(false);
    };
    loadAppointments();
  }, []);

  return loadingData ? (
    <Spinner />
  ) : (
    <table className='table mt-5'>
      <thead>
        <tr>
          <th>Nombre Cliente</th>
          <th>Comentario</th>
          <th>Hora Solicitud</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((x) => (
          <tr key={x.appointmentId}>
            <td>{x.name}</td>
            <td>{x.comment}</td>
            <td>{Helper.formatTimeStamp(x.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentsView;
