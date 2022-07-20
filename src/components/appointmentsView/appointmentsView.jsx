import { useState, useEffect } from 'react';
import AppointmentService from 'services/appointment.service';
import Spinner from 'components/spinner/spinner';

const AppointmentsView = () => {
  const [loadingData, setLoadingData] = useState(true);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      await AppointmentService.getAllAppointments()
        .then((response) => {
          console.log(response);
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
            <td>{new Date(x.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AppointmentsView;
