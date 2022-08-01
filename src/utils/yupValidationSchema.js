import * as Yup from 'yup';

const signIn = Yup.object({
  email: Yup.string().email().required('Campo obligatorio!'),
  password: Yup.string()
    .max(20, 'Contraseña no puede exceder 20 caracteres.')
    .min(6, 'Contraseña no puede tener menos de 6 caracteres.')
    .required('Campo obligatorio!')
});

const appointment = Yup.object({
  name: Yup.string()
    .max(20, 'Nombre no puede exceder 20 caracteres.')
    .min(3, 'Nombre no puede tener menos de 3 caracteres.')
    .required('Campo obligatorio!'),
  comment: Yup.string().max(40, 'Comentario no puede exceder de 60 caracteres.')
});

const YupValidationSchema = {
  signIn,
  appointment
};

export default YupValidationSchema;
