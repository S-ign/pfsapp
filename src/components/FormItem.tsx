import TextField from '@mui/material/TextField';
import DatePicker from "./DatePicker"

export default function FormItem(props: {itemName: string, datelabel: string, textlabel: string}) {
  return (
    <div className="flex container">
      <div className="flex justify-between items-center w-full m-4">
        <div className="w-2/12 text-xl justify-left">
          <p>{props.itemName}</p>
        </div>
        <div>
          <DatePicker label={props.datelabel}/>
        </div>
        <div>
          <TextField id="standard-basic" label={props.textlabel} variant="standard" />
        </div>
      </div>
    </div>
  );
}
