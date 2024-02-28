// Using Axios
import axios from 'axios';

const BACKURL = 'http://127.0.0.1:8000/'

export default function getEmployee() {
  return new Promise(resolve => {
    axios.get(BACKURL + 'employee')
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        if (error.response) {
          // O servidor respondeu com um código de status diferente de 2xx
          console.error('Erro na resposta do servidor', error.response.data);
        } else if (error.request) {
          // A requisição foi feita, mas não houve resposta do servidor
          console.error('Erro na requisição', error.request);
        } else {
          // Ocorreu um erro durante a configuração da requisição
          console.error('Erro ao configurar a requisição', error.message);
        }
      })
  });
};
