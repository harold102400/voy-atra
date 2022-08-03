import './appointmentRequest.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from 'context/userContext';
import Swal from 'sweetalert2';
import Helper from 'utils/helper';
import Spinner from 'components/spinner/spinner';
import InputFormik from 'components/formik/inputFormik';
import FormValidation from 'utils/formValidation';
import Button from 'react-bootstrap/Button';
import NavigateBtn from 'components/buttons/navigateBtn/navigateBtn';
import AppointmentService from 'services/appointment.service';

const AppointmentRequest = () => {
  const params = useParams();
  const { user, userSite } = UserAuth();
  const navigate = useNavigate();
  const [loadingData, setLoadingData] = useState(false);
  const validation = FormValidation.appointment;
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
          AppointmentService.createAppointment(values, params.site);
          SwalObj.fire({
            title: `Turno Asignado!`,
            icon: 'success',
            showConfirmButton: false
          }).then(() => {
            navigate(user ? `/admin-panel/${userSite}` : `/${params.site}`);
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
              <NavigateBtn
                route={user ? `/admin-panel/${userSite}` : `/${params.site}`}
                variant='btn btn-outline-dark btn-lg btn-block'
                text={'Volver'}
              />
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
