import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import type { FormItemInterface } from '../types/form';

export default function LiabilitiesFormItem(props: {formInfo: FormItemInterface}) {
  return (
    <div>
      <div className="flex container">
        <div className="flex justify-between items-center w-full m-4">
          <div className="w-2/12 text-xl justify-left">
            <p>{props.formInfo.itemName}</p>
          </div>
          <div>
            <TextField id={props.formInfo.itemName + "Amount"} label="Amount" variant="standard"/>
          </div>
          <div>
            <TextField id={props.formInfo.itemName + "Interest"} label="Interest Rate" variant="standard"/>
          </div>
          <div>
            <TextField id={props.formInfo.itemName + "Payment"} label="Minimum Payment" variant="standard"/>
          </div>
        </div>
      </div>
        <Accordion>
          <AccordionSummary>Notes</AccordionSummary>
          <AccordionDetails>
            <TextField id={props.formInfo.itemName + "Notes"} variant="filled" multiline={true} minRows="5" fullWidth={true}></TextField>
          </AccordionDetails>
        </Accordion>
    </div>
  );
}


