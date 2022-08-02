import './appointmentsAdmin.css';
import { useState, useEffect } from 'react';
import AppointmentService from 'services/appointment.service';
import Spinner from 'components/spinner/spinner';
import Helper from 'utils/helper';
import Table from 'react-bootstrap/esm/Table';
import DeleteAppointmentBtn from 'components/buttons/deleteAppointmentBtn/deleteAppointmentBtn';

const AppointmentsAdmin = ({ collection }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const loadAppointments = async () => {
      await AppointmentService.getAllAppointments(collection)
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
    <Table striped bordered className='table mt-5'>
      <thead>
        <tr>
          <th>Turno</th>
          <th>Cliente</th>
          <th>Hora Solicitud</th>
          <th>Comentario</th>
        </tr>
      </thead>
      <tbody>
        {appointments.map((x) => (
          <tr key={x.appointmentId}>
            <td></td>
            <td>{x.name}</td>
            <td>{Helper.formatTimeStamp(x.createdAt)}</td>
            <td>{x.comment}</td>
            <td>
              <DeleteAppointmentBtn id={x.appointmentId} name={x.name} collection={collection} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AppointmentsAdmin;
