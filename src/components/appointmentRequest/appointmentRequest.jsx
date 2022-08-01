import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import InputFormik from 'components/formik/inputFormik';
import YupValidationSchema from 'utils/yupValidationSchema';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RequestAppointmentBtn = () => {
  const [show, setShow] = useState(false);
  const validation = YupValidationSchema.signIn;
  const initialValues = {
    name: '',
    comment: ''
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <>
      <div className='mt-5'>
        <Button variant='btn btn-secondary btn-lg btn-block mt-3' onClick={handleShow}>
          Solicitar Turno
        </Button>
      </div>
      <Formik initialValues={initialValues} validationSchema={validation} onSubmit={(handleSubmit)}>
        <Form>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Solicitar Turno</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputFormik control='input' type='text' label='Nombre:' name='name' />
              <InputFormik control='input' type='text' label='Comentario:' name='comment' />
            </Modal.Body>
            <Modal.Footer>
              <Button variant='btn btn-outline-dark' onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant='btn btn-secondary' onClick={handleSubmit}>
                Solicitar Turno
              </Button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Formik>
    </>
  );
};

export default RequestAppointmentBtn;
