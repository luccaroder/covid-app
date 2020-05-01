import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

export default function DatePickerStartMonitor({handleDateChange, selectedDate }) {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          autoOk
          variant="inline"
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
        />
    </MuiPickersUtilsProvider>
  );
}