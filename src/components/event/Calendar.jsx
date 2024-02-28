// Calendar.jsx
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Formatação do mes na base 0.
    const day = date.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}${month}${day}`;

    return formattedDate;
}

const Calendar = ({ onDateRangeChange }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDateRangeSelection = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        onDateRangeChange(start, end);
    };

    return (
        <div>
            <DatePicker
                selected={startDate}
                onChange={(date) => handleDateRangeSelection([date, endDate])}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className=""
                id="startDate"
                placeholderText="Data de início"
                dateFormat="dd/MM/yyyy"
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => handleDateRangeSelection([startDate, date])}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className=""
                id="endDate"
                placeholderText="Data de término"
                dateFormat="dd/MM/yyyy"
            />
        </div>
    );
}

export default Calendar;
