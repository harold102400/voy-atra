import './appointmentsView.css';
import { useState, useEffect } from 'react';
import AppointmentService from 'services/appointment.service';
import Spinner from 'components/spinner/spinner';
import Helper from 'utils/helper';
import Table from 'react-bootstrap/esm/Table';

const AppointmentsView = ({ site }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      await AppointmentService.getAllAppointments(site)
        .then((response) => {
          setAppointments(response);
        })
        .catch((err) => {
          console.log(err);
        });
      setLoadingData(false);
    };
    loadAppointments();
  }, [site]);

  return loadingData ? (
    <Spinner />
  ) : (
    <Table className='table mt-5'>
      <thead>
        <tr>
          <th>Turno</th>
          <th>Cliente</th>
          <th>Hora Solicitud</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((x) => (
          <tr key={x.appointmentId}>
            <td></td>
            <td>{x.name}</td>
            <td>{Helper.formatTimeStamp(x.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AppointmentsView;
