import './appointmentRequest.css';
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import InputFormik from 'components/formik/inputFormik';
import YupValidationSchema from 'utils/yupValidationSchema';
import Button from 'react-bootstrap/Button';

const AppointmentRequest = () => {
  const validation = YupValidationSchema.appointment;
  const initialValues = {
    name: '',
    comment: ''
  };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validation} onSubmit={handleSubmit}>
      <div>
        <h2>Solicite su turno aqui!</h2>
        <div className='appointment-form mt-5'>
          <Form>
            <InputFormik control='input' type='text' label='Nombre:' name='name' />
            <br />
            <InputFormik control='input' type='text' label='Comentario:' name='comment' />
            <div className='mt-4'>
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
