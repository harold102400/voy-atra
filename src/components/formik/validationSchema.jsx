import * as Yup from 'yup';

const appointment = Yup.object({
  name: Yup.string().required('Campo obligatorio!'),
  comment: Yup.string().max(60, 'Comentario no puede exceder de 60 caracteres!')
});

const ValidationSchema = {
  appointment
};

export default ValidationSchema;
