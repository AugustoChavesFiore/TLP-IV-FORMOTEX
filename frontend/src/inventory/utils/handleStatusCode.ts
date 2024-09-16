import { toast } from 'react-hot-toast'


export const handleStatusErrors = (statusCode: number) => {
  switch (statusCode) {
    case 401:
      return toast.error('Credenciales incorrectas');
    case 500:
      return toast.error('Error en el servidor');
    case 400:
      return toast.error('Petición incorrecta');
    case 409:
      return toast.error('Ya existe');
    case 404:
      return toast.error('No encontrado');
    case 403:
      return toast.error('No tienes permisos');

    default:
      return toast.error('Error desconocido');
  }
};