import { Field, ErrorMessage } from 'formik';

const InputFormik = ({ label, name, ...rest }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Field className='form-control' id={name} name={name} {...rest} />
      <ErrorMessage component='div' className='alert alert-danger mt-2' role='alert' name={name} />
    </>
  );
};

export default InputFormik;
