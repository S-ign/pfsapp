import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import DatePicker from "./DatePicker";
import dayjs  from 'dayjs'

import type { Dayjs } from 'dayjs'
import type { ItemData, GrossMonthlyIncomeType } from "../types/form"

type FormItemProps = {
  item: string,

  GrossMonthlyIncome: GrossMonthlyIncomeType,

  updateGrossMonthlyIncome: (
  GrossMonthlyIncome: GrossMonthlyIncomeType
  ) => void,

  inputs: {
    name: string,
    date: string,
    amount: string,
    notes: string,
  }
}

const GrossMonthlyIncomeFormItem = (props: FormItemProps) => {

  let gmi: GrossMonthlyIncomeType

  const updatePropertyDate = (gmiProps: ItemData, date: string) => {
    gmiProps.Date = date
    return {...props.GrossMonthlyIncome, gmiProps }
  }

  const updatePropertyAmount = (gmiProps: ItemData, amount: string) => {
    gmiProps.Amount = amount
    return {...props.GrossMonthlyIncome, gmiProps }
  }

  const updatePropertyNote = (gmiProps: ItemData, notes: string) => {
    gmiProps.Notes = notes
    return {...props.GrossMonthlyIncome, gmiProps }
  }

  const DateChangeHandler = (event: Dayjs | null) => {
    if (!event) {
      return;
    }

    switch (props.item) {
      case 'GrossMonthlyIncomeSalary':
        gmi = updatePropertyDate(props.GrossMonthlyIncome.Salary, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeRealEstateRentals':
        gmi = updatePropertyDate(props.GrossMonthlyIncome.RealEstateRentals, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeBusiness':
        gmi = updatePropertyDate(props.GrossMonthlyIncome.Business, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeDividendStocks':
        gmi = updatePropertyDate(props.GrossMonthlyIncome.DividendStocks, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeOther':
        gmi = updatePropertyDate(props.GrossMonthlyIncome.Other, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyIncome(gmi)
      break;
    }
  }

  const AmountChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => {
    if (!event) {
      return;
    }

    switch (props.item) {
      case 'GrossMonthlyIncomeSalary':
        gmi = updatePropertyAmount(props.GrossMonthlyIncome.Salary, event.target.value)
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeRealEstateRentals':
        gmi = updatePropertyAmount(props.GrossMonthlyIncome.RealEstateRentals, event.target.value)
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeBusiness':
        gmi = updatePropertyAmount(props.GrossMonthlyIncome.Business, event.target.value)
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeDividendStocks':
        gmi = updatePropertyAmount(props.GrossMonthlyIncome.DividendStocks, event.target.value)
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeOther':
        gmi = updatePropertyAmount(props.GrossMonthlyIncome.Other, event.target.value)
        props.updateGrossMonthlyIncome(gmi)
      break;
    }
  }

  const NoteChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => {
    if (!event) {
      return;
    }
    switch (props.item) {
      case 'GrossMonthlyIncomeSalary':
        gmi = updatePropertyNote(props.GrossMonthlyIncome.Salary, event.target.value)
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeRealEstateRentals':
        gmi = updatePropertyNote(props.GrossMonthlyIncome.RealEstateRentals, event.target.value)
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeBusiness':
        gmi = updatePropertyNote(props.GrossMonthlyIncome.Business, event.target.value)
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeDividendStocks':
        gmi = updatePropertyNote(props.GrossMonthlyIncome.DividendStocks, event.target.value)
        props.updateGrossMonthlyIncome(gmi)
      break;

      case 'GrossMonthlyIncomeOther':
        gmi = updatePropertyNote(props.GrossMonthlyIncome.Other, event.target.value)
        props.updateGrossMonthlyIncome(gmi)
      break;
    }
  }

  return (
    <div>
      <div className="flex container">
        <div className="flex justify-between items-center w-full m-4">
          <div className="w-2/12 text-xl justify-left">
            <p>{props.inputs.name}</p>
          </div>
          <div>
            <DatePicker dateChangeHandler={DateChangeHandler} label="Date Recieved" value={props.inputs.date}/>
          </div>
          <div>
            <TextField onChange={AmountChangeHandler} id={props.item} label="Amount" variant="standard" value={props.inputs.amount}/>
          </div>
        </div>
      </div>
        <Accordion>
          <AccordionSummary>Notes</AccordionSummary>
          <AccordionDetails>
            <TextField id={props.item} onChange={NoteChangeHandler} variant="filled" multiline={true} minRows="5" fullWidth={true} value={props.inputs.notes}></TextField>
          </AccordionDetails>
        </Accordion>
    </div>
  );
}

export default GrossMonthlyIncomeFormItem
