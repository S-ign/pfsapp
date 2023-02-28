import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import DatePicker from "./DatePicker";
import dayjs  from 'dayjs'
import type { Dayjs } from 'dayjs'
import useBoundStore from '../slices/FormSlices'

export default function FormItem(){
  const salary = useBoundStore((state) => state.Salary)
  const updateSalary = useBoundStore((state) => state.updateSalary)

  const DateChangeHandler = (event: Dayjs | null) => {
    if (!event) {
      return;
    }

    updateSalary({key:salary.Name, Name:salary.Name, Date:dayjs(event).format('MM/DD/YYYY'), Amount:salary.Amount, Notes:salary.Notes})
  }

  const AmountChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => {
    if (!event) {
      return;
    }
    updateSalary({key:salary.Name, Name:salary.Name, Date:salary.Date, Amount:event.target.value, Notes:salary.Notes})
  }

  const NoteChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => {
    if (!event) {
      return;
    }
    updateSalary({key:salary.Name, Name:salary.Name, Date:salary.Date, Amount:salary.Amount, Notes:event.target.value})
  }

  return (
    <div>
      <div className="flex container">
        <div className="flex justify-between items-center w-full m-4">
          <div className="w-2/12 text-xl justify-left">
            <p>{salary.Name}</p>
          </div>
          <div>
            <DatePicker dateChangeHandler={DateChangeHandler} label="Date Recieved" value={salary.Date}/>
          </div>
          <div>
            <TextField onChange={AmountChangeHandler} id={salary.Name} label="Amount" variant="standard" value={salary.Amount}/>
          </div>
        </div>
      </div>
        <Accordion>
          <AccordionSummary>Notes</AccordionSummary>
          <AccordionDetails>
            <TextField id={salary.Name} onChange={NoteChangeHandler} variant="filled" multiline={true} minRows="5" fullWidth={true} value={salary.Notes}></TextField>
          </AccordionDetails>
        </Accordion>
    </div>
  );
}

