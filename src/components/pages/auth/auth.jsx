import './auth.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { UserAuth } from 'context/userContext';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import YupValidationSchema from 'utils/yupValidationSchema';
import Spinner from 'components/spinner/spinner';
import InputFormik from 'components/formik/inputFormik';

const Auth = () => {
  const SwalObj = Swal.mixin();
  const { signIn } = UserAuth();
  const params = useParams();
  const [loadingData, setLoadingData] = useState(false);
  const navigate = useNavigate();
  const validation = YupValidationSchema.signIn;
  const initialValues = {
    email: '',
    password: ''
  };

  const handleOnAuth = async (values) => {
    setLoadingData(true);
    try {
      await signIn(values.email, values.password);
      navigate(`/admin-panel/${params.site}`);
      setLoadingData(false);
    } catch (err) {
      setLoadingData(false);
      console.log(err);
      SwalObj.fire({
        html: `<strong>${err}</strong>`,
        icon: 'error',
        showConfirmButton: false
      });
    }
  };

  return loadingData ? (
    <Spinner />
  ) : (
    <Formik initialValues={initialValues} validationSchema={validation} onSubmit={handleOnAuth}>
      <div>
        <h2 className='login-title'>Login</h2>
        <div className='login-form'>
          <Form>
            <div className='form-control'>
              <InputFormik control='input' type='email' label='Email:' name='email' />
              <InputFormik control='input' type='password' label='Password:' name='password' />
              <div className='d-grid gap-2 mt-3'>
                <button className='btn btn-secondary btn-lg btn-block' type='submit'>
                  Login
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default Auth;
