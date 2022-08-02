import './appointmentRequest.css';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Helper from 'utils/helper';
import Spinner from 'components/spinner/spinner';
import InputFormik from 'components/formik/inputFormik';
import YupValidationSchema from 'utils/yupValidationSchema';
import Button from 'react-bootstrap/Button';
import NavigateBtn from 'components/buttons/navigateBtn/navigateBtn';
import AppointmentService from 'services/appointment.service';
import { UserAuth } from 'context/authContext';

const AppointmentRequest = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [loadingData, setLoadingData] = useState(false);
  const validation = YupValidationSchema.appointment;
  const initialValues = {
    name: '',
    comment: ''
  };

  const handleSubmit = async (values) => {
    const SwalObj = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-outline-info m-3',
        cancelButton: 'btn btn-outline-dark'
      },
      buttonsStyling: false
    });

    SwalObj.fire({
      title: 'Desea solicitar un turno?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'SOLICITAR',
      cancelButtonText: 'CANCELAR',
      focusCancel: true,
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        setLoadingData(true);
        try {
          values.name = Helper.firstCharToUpper(values.name);
          AppointmentService.createAppointment(values);
          SwalObj.fire({
            title: `Turno Asignado!`,
            icon: 'success',
            showConfirmButton: false
          }).then(() => {
            navigate(user ? '/admin-panel' : '/');
          });
        } catch (err) {
          SwalObj.fire({
            title: 'Error solicitando turno!',
            html: `${err.response.data.title}`,
            icon: 'error',
            showConfirmButton: false
          });
        }
        setLoadingData(false);
      }
    });
  };

  return loadingData ? (
    <Spinner />
  ) : (
    <Formik initialValues={initialValues} validationSchema={validation} onSubmit={handleSubmit}>
      <div>
        <h2>Solicite su turno aqui!</h2>
        <div className='appointment-form mt-5'>
          <Form>
            <InputFormik control='input' type='text' label='Nombre:' name='name' />
            <InputFormik control='input' type='text' label='Comentario:' name='comment' />
            <div className='mt-4'>
              <NavigateBtn route={user ? '/admin-panel' : '/'} variant='btn btn-outline-dark btn-lg btn-block' text={'Volver'} />
              <Button variant='btn btn-secondary btn-lg' type='submit'>
                Solicitar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default AppointmentRequest;
