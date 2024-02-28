// Using Axios
import axios from 'axios';
import { getOpID } from '../operator/Operator'
import { getSubID } from '../substitute/Substitute';
import { formatDate } from '../event/Calendar';
import { getCheckboxID } from '../checkbox/Checkbox';

const BACKURL = 'http://127.0.0.1:8000/'

export default function getEscala() {
  axios.get(BACKURL + 'escala', { withCredentials: true })
  .then(response => {
    return response.data
  })
  .catch(error => {
    if(error.response){
      // O servidor respondeu com um código de status diferente de 2xx
      console.error('Erro na resposta do servidor', error.response.data);
    }else if(error.request){
      // A requisição foi feita, mas não houve resposta do servidor
      console.error('Erro na requisição', error.request);
    }else{
      // Ocorreu um erro durante a configuração da requisição
      console.error('Erro ao configurar a requisição', error.message);
    }
  });
};

export function updateCalendar(formData) {

  const payload = {
    dt_inicio : formatDate(formData.startDate) + '0000',
    dt_fim : formatDate(formData.endDate) + '9999',
    calendar_id : getCheckboxID(formData.selectedOption),
    employee_id : getOpID(formData.operator),
    substitute_id : getSubID(formData.substituteOperator)    
  };
  
  axios.post(BACKURL + 'escala/calendar', payload)
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    if(error.response){
      // O servidor respondeu com um código de status diferente de 2xx
      console.error('Erro na resposta do servidor', error.response.data);
    }else if(error.request){
      // A requisição foi feita, mas não houve resposta do servidor
      console.error('Erro na requisição', error.request);
    }else{
      // Ocorreu um erro durante a configuração da requisição
      console.error('Erro ao configurar a requisição', error.message);
    }
  });
};