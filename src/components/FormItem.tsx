import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import DatePicker from "./DatePicker";

export default function FormItem(props: {
  key: string, keyname: string, Name: string, Date: string, Amount: string, Notes: string,
  update: (item: {Name: string, Date: string, Amount: string, Notes: string }) => void 
}){

  const DateChangeHandler = (event) => {
    if (!event) {
      return;
    }
    const date = [event.$M+1, event.$D, event.$y].join("/") 
    props.update({Name:props.Name, Date:date, Amount:props.Amount, Notes:props.Notes})
  }

  const AmountChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => {
    if (!event) {
      return;
    }
    props.update({Name:props.Name, Date:props.Date, Amount:event.target.value, Notes:props.Notes})
  }

  const NoteChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => {
    if (!event) {
      return;
    }
    props.update({Name:props.Name, Date:props.Date, Amount:props.Amount, Notes:event.target.value})
  }


  return (
    <div>
      <div className="flex container">
        <div className="flex justify-between items-center w-full m-4">
          <div className="w-2/12 text-xl justify-left">
            <p>{props.Name}</p>
          </div>
          <div>
            <DatePicker dateChangeHandler={DateChangeHandler} label="Date Recieved" value={props.Date}/>
          </div>
          <div>
            <TextField onChange={AmountChangeHandler} id={props.keyname} label="Amount" variant="standard" value={props.Amount}/>
          </div>
        </div>
      </div>
        <Accordion>
          <AccordionSummary>Notes</AccordionSummary>
          <AccordionDetails>
            <TextField id={props.keyname} onChange={NoteChangeHandler} variant="filled" multiline={true} minRows="5" fullWidth={true} value={props.Notes}></TextField>
          </AccordionDetails>
        </Accordion>
    </div>
  );
}
