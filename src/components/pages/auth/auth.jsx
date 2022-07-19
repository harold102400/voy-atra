import './auth.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { UserAuth } from '../context/authContext';
import Swal from 'sweetalert2';
import YupValidationSchema from './utils/yupValidationSchema';
import Spinner from '../../spinner/spinner';

const Auth = () => {
  const SwalObj = Swal.mixin();
  const { signIn } = UserAuth();
  const [loadingData, setLoadingData] = useState(false);
  const navigate = useNavigate();
  //const validation = YupValidationSchema.signIn;
  const initialValues = {
    email: '',
    password: ''
  };
};

export default Auth;
