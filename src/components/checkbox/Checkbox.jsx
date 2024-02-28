import { useState } from 'react';

export function getCheckboxID(value){
  let retorno
  if (value == 'Atestado'){
    retorno = 2;
  }
  else if (value == 'Banco de Horas'){
    retorno = 7;
  }
  else if (value == 'Ferias'){
    retorno = 6;
  }
  else if (value == 'Folga'){
    retorno = 4;
  }
  else {
    retorno = -1
  }
  return retorno;
}

const Checkbox = ({ onCheckboxChange }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null);
      onCheckboxChange(null);
    } else {
      setSelectedOption(option);
      onCheckboxChange(option);
    }
  };

  return (
    <div className="font-semibold flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-md">
        <ul className="shadow-lg">
          <li
            className="bg-white border-b-2 flex items-center justify-start gap-2.5"
          >
            <input
              type="radio"
              id="radioAtestado"
              className="peer relative appearance-none shrink-0 w-5 h-5 border rounded-full focus:outline-none checked:bg-gray-600 hover:ring hover:ring-gray-300"
              checked={selectedOption === 'Atestado'}
              onChange={() => handleCheckboxChange('Atestado')}
            />
            <label htmlFor="radioAtestado">Atestado</label>
          </li>
          <li
            className="bg-white border-b-2 flex items-center justify-start gap-2.5"
          >
            <input
              type="radio"
              id="radioBancoHoras"
              className="peer relative appearance-none shrink-0 w-5 h-5 border rounded-full focus:outline-none checked:bg-gray-600 hover:ring hover:ring-gray-300"
              checked={selectedOption === 'Banco de Horas'}
              onChange={() => handleCheckboxChange('Banco de Horas')}
            />
            <label htmlFor="radioBancoHoras">Banco de Horas</label>
          </li>
          <li
            className="bg-white border-b-2 flex items-center justify-start gap-2.5"
          >
            <input
              type="radio"
              id="radioFerias"
              className="peer relative appearance-none shrink-0 w-5 h-5 border rounded-full focus:outline-none checked:bg-gray-600 hover:ring hover:ring-gray-300"
              checked={selectedOption === 'Ferias'}
              onChange={() => handleCheckboxChange('Ferias')}
            />
            <label htmlFor="radioFerias">Férias</label>
          </li>
          <li
            className="bg-white border-b-2 flex items-center justify-start gap-2.5"
          >
            <input
              type="radio"
              id="radioFolga"
              className="peer relative appearance-none shrink-0 w-5 h-5 border rounded-full focus:outline-none checked:bg-gray-600 hover:ring hover:ring-gray-300"
              checked={selectedOption === 'Folga'}
              onChange={() => handleCheckboxChange('Folga')}
            />
            <label htmlFor="radioFolga">Folga</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Checkbox;
