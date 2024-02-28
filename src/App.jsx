import { useState } from 'react';
import Operator from './components/operator/Operator';
import Checkbox from './components/checkbox/Checkbox';
import Substitute from './components/substitute/Substitute';
import Calendar from './components/event/Calendar';
import { updateCalendar } from './components/backend/escala';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [dataToSend, setDataToSend] = useState({
    operator: '',
    selectedOption: '',
    startDate: null,
    endDate: null,
    substituteOperator: '',
  });

  //Validação de Campos.
  const confirmAndSendData = () => {
    const fieldMessages = {
      operator: 'Por favor, selecione o operador.',
      selectedOption: 'Por favor, selecione atestado, Banco de H., Férias ou Folga.',
      startDate: 'Por favor, selecione a data de início.',
      endDate: 'Por favor, selecione a data de término.',
      substituteOperator: 'Por favor, selecione o operador substituto.'
    };
    for (const field in fieldMessages) {
      if (!dataToSend[field]) {
        alert(fieldMessages[field]);
        return;
      }
    }
    if (dataToSend.operator === 'Selecione o operador' || dataToSend.substituteOperator === 'Selecione o operador') {
      alert('Por favor, selecione um operador válido.');
      return;
    }
    if (dataToSend.operator === dataToSend.substituteOperator) {
      alert('O operador substituto deve ser diferente do operador selecionado.');
      return;
    }
    setShowModal(true);
  };
  

  const handleConfirm = () => {
    updateCalendar(dataToSend); // Envia os dados apenas quando o usuário confirmar no modal
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false); // Fecha o modal se o usuário cancelar
  };

  const handleCheckboxChange = (selectedOption) => {
    setDataToSend({ ...dataToSend, selectedOption });
  };

  const handleOperatorChange = (selectedOperator) => {
    setDataToSend({ ...dataToSend, operator: selectedOperator });
  };

  const handleSubstituteChange = (selectedSubstitute) => {
    setDataToSend({ ...dataToSend, substituteOperator: selectedSubstitute });
  };

  const handleDateRangeChange = (startDate, endDate) => {
    setDataToSend({ ...dataToSend, startDate, endDate });
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-gradient-to-r from-green-400 to-blue-500'>
      <form id="">
        <div className="p-12 text-center bg-white shadow-lg rounded-md">
          <h1 className="block text-lg leading-6 text-gray-900 font-bold">Movimentação de Escala do Operador</h1>
          <div >
            <Operator onOperatorChange={handleOperatorChange} />
          </div>
          <div className='mt-2'>
            <Checkbox onCheckboxChange={handleCheckboxChange} />
          </div>
          <div className='mt-2 mb-2 items-center justify-between appearance-none border rounded-sm focus:outline-none checked:bg-gray-600 hover:ring hover:ring-gray-300 font-semibold'>
            <Calendar onDateRangeChange={handleDateRangeChange} />
          </div>

          <div>
            <Substitute onSubstituteChange={handleSubstituteChange} />
          </div>
          <div>
            <button className='py-1 mt-6 bg-blue-600 w-20 text-zinc-50 rounded-full border' type="button" onClick={confirmAndSendData}>Enviar</button>
          </div>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-lg">
            <div className="text-center font-semibold">
              <p className="text-lg font-bold">Confirme as informações:</p>
              <p className="text-sm">
                Operador: {dataToSend.operator}
              </p>
              <p className="text-sm">
                Opção Selecionada: {dataToSend.selectedOption}
              </p>
              <p className="text-sm">
                Data Início: {dataToSend.startDate && dataToSend.startDate.toLocaleDateString()}
              </p>
              <p className="text-sm">
                Data Término: {dataToSend.endDate && dataToSend.endDate.toLocaleDateString()}
              </p>
              <p className="text-sm">
                Operador Substituto: {dataToSend.substituteOperator}
              </p>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
                onClick={handleCancel}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                onClick={handleConfirm}
              >
                Confirmar e Enviar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
