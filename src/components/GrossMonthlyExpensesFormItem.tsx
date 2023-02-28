import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import DatePicker from "./DatePicker";
import dayjs  from 'dayjs'

import type { Dayjs } from 'dayjs'
import type { ItemData, GrossMonthlyExpensesType } from "../types/form"

type FormItemProps = {
  item: string,

  GrossMonthlyExpenses: GrossMonthlyExpensesType,

  updateGrossMonthlyExpenses: (
    GrossMonthlyExpenses: GrossMonthlyExpensesType
  ) => void,

  inputs: {
    name: string,
    date: string,
    amount: string,
    notes: string,
  }

}

const GrossMonthlyExpensesFormItem = (props: FormItemProps) => {

  let gme: GrossMonthlyExpensesType

  const updatePropertyDate = (gmeProps: ItemData, date: string) => {
    gmeProps.Date = date
    return {...props.GrossMonthlyExpenses, gmeProps }
  }

  const updatePropertyAmount = (gmeProps: ItemData, amount: string) => {
    gmeProps.Amount = amount
    return {...props.GrossMonthlyExpenses, gmeProps }
  }

  const updatePropertyNote = (gmeProps: ItemData, notes: string) => {
    gmeProps.Notes = notes
    return {...props.GrossMonthlyExpenses, gmeProps }
  }

  const DateChangeHandler = (event: Dayjs | null) => {
    if (!event) {
      return;
    }
    switch (props.item) {
      case 'GrossMonthlyExpensesMortgage':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.Mortgage, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesRent':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.Rent, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesInsurance':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.Insurance, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesPropertyTax':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.PropertyTax, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesHomeMaintenance':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.HomeMaintenance, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesHomeIncidentals':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.HomeIncidentals, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesElectricity':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.Electricity, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesWater':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.Water, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesGarbage':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.Garbage, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesGas':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.Gas, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesInternet':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.Internet, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesPhonePlan':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.PhonePlan, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesAutoLoan':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.AutoLoan, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesAutoInsurance':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.AutoInsurance, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesFuelCosts':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.FuelCosts, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesAutoMaintenance':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.AutoMaintenance, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesGroceries':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.Groceries, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesDiningOut':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.DiningOut, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesHealthInsurance':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.HealthInsurance, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesVisionInsurance':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.VisionInsurance, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesDentalInsurance':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.DentalInsurance, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesChildCare':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.ChildCare, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesChildExpenses':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.ChildExpenses, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesStudentLoan':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.StudentLoan, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesLineOfCredit':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.LineOfCredit, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesCreditCard':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.CreditCard, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesPersonalLoan':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.PersonalLoan, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesOther':
        gme = updatePropertyDate(props.GrossMonthlyExpenses.Other, dayjs(event).format('MM/DD/YYYY'))
        props.updateGrossMonthlyExpenses(gme)
      break;
    }
  }

  const AmountChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => {
    if (!event) {
      return;
    }

    switch (props.item) {
      case 'GrossMonthlyExpensesMortgage':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.Mortgage, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesRent':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.Rent, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesInsurance':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.Insurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesPropertyTax':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.PropertyTax, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesHomeMaintenance':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.HomeMaintenance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesHomeIncidentals':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.HomeIncidentals, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesElectricity':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.Electricity, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesWater':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.Water, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesGarbage':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.Garbage, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesGas':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.Gas, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesInternet':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.Internet, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesPhonePlan':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.PhonePlan, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesAutoLoan':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.AutoLoan, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesAutoInsurance':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.AutoInsurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesFuelCosts':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.FuelCosts, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesAutoMaintenance':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.AutoMaintenance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesGroceries':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.Groceries, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesDiningOut':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.DiningOut, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesHealthInsurance':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.HealthInsurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesVisionInsurance':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.VisionInsurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesDentalInsurance':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.DentalInsurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesChildCare':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.ChildCare, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesChildExpenses':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.ChildExpenses, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesStudentLoan':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.StudentLoan, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesLineOfCredit':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.LineOfCredit, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesCreditCard':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.CreditCard, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesPersonalLoan':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.PersonalLoan, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesOther':
        gme = updatePropertyAmount(props.GrossMonthlyExpenses.Other, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

    }
  }

  const NoteChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => {
    if (!event) {
      return;
    }

    switch (props.item) {
      case 'GrossMonthlyExpensesMortgage':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.Mortgage, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesRent':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.Rent, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesInsurance':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.Insurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)

      case 'GrossMonthlyExpensesPropertyTax':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.PropertyTax, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesHomeMaintenance':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.HomeMaintenance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesHomeIncidentals':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.HomeIncidentals, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesElectricity':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.Electricity, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesWater':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.Insurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesGarbage':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.Insurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesGas':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.Insurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesInternet':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.Internet, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesPhonePlan':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.PhonePlan, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesAutoLoan':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.AutoLoan, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesAutoInsurance':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.AutoInsurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesFuelCosts':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.FuelCosts, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesAutoMaintenance':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.AutoMaintenance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesGroceries':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.Groceries, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesDiningOut':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.DiningOut, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesHealthInsurance':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.HealthInsurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesVisionInsurance':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.VisionInsurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesDentalInsurance':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.DentalInsurance, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesChildCare':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.ChildCare, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesChildExpenses':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.ChildExpenses, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesStudentLoan':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.StudentLoan, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesLineOfCredit':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.LineOfCredit, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesCreditCard':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.CreditCard, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesPersonalLoan':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.PersonalLoan, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
      break;

      case 'GrossMonthlyExpensesOther':
        gme = updatePropertyNote(props.GrossMonthlyExpenses.Other, event.target.value)
        props.updateGrossMonthlyExpenses(gme)
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

export default GrossMonthlyExpensesFormItem
