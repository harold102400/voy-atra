import Swal from 'sweetalert2';
import AppointmentService from 'services/appointment.service';
import Button from 'react-bootstrap/Button';

const DeleteAppointmentBtn = ({ id, name, site }) => {
  const SwalObj = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-outline-danger m-3',
      cancelButton: 'btn btn-outline-dark'
    },
    buttonsStyling: false
  });

  const handleClick = () => {
    SwalObj.fire({
      title: 'Eliminar Turno',
      html: `Confirme que va concluir con el cliente <b>${name}</b>.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ELIMINAR',
      cancelButtonText: 'CANCELAR',
      focusCancel: true,
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        AppointmentService.deleteAppointment(id, site);
        SwalObj.fire({
          html: 'Turno Concluido!',
          icon: 'success',
          showConfirmButton: false
        }).then(() => {
          window.location.reload();
        });
      }
    });
  };

  return (
    <Button variant='btn btn-danger' onClick={handleClick}>
      Concluir Turno
    </Button>
  );
};

export default DeleteAppointmentBtn;
