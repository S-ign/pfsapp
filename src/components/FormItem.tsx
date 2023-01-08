import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import DatePicker from "./DatePicker";

import useBoundStore from '../slices/FormSlices'

export default function FormItem(props: {key: string, keyname: string, Name: string, Date: string, Amount: string, Notes: string}) {
  const salary = useBoundStore((state) => state.Salary)
  const realEstateRentals = useBoundStore((state) => state.RealEstateRentals)
  const business = useBoundStore((state) => state.Business)
  const dividendStocks = useBoundStore((state) => state.DividendStocks)
  const other = useBoundStore((state) => state.Other)
  const updateSalary = useBoundStore((state) => state.updateSalary)
  const updateRealEstateRentals = useBoundStore((state) => state.updateRealEstateRentals)
  const updateBusiness = useBoundStore((state) => state.updateBusiness)
  const updateDividendStocks = useBoundStore((state) => state.updateDividendStocks)
  const updateOther = useBoundStore((state) => state.updateOther)

  const DateChangeHandler = (event) => {
    const date = [event.$M+1, event.$D, event.$y].join("/") 

    if (!event) {
      return;
    }
    switch(props.keyname) {

      case "GrossMonthlyIncomeSalary":
        updateSalary({key:salary.key, Name:salary.Name, Date:date, Amount:salary.Amount, Notes: salary.Notes})
        break

      case "GrossMonthlyIncomeRealEstateRentals":
        updateRealEstateRentals({key:realEstateRentals.key, Name:realEstateRentals.Name, Date:date, Amount:realEstateRentals.Amount, Notes:realEstateRentals.Notes})
        break

      case "GrossMonthlyIncomeBusiness":
        updateBusiness({key:business.key, Name:business.Name, Date:date, Amount:business.Amount, Notes:business.Notes})
        break

      case "GrossMonthlyIncomeDividendStocks":
        updateDividendStocks({key:dividendStocks.key, Name:dividendStocks.Name, Date:date, Amount:dividendStocks.Amount, Notes:dividendStocks.Notes})
        break

      case "GrossMonthlyIncomeOther":
        updateOther({key:other.key, Name:other.Name, Date:date, Amount:other.Amount, Notes:other.Notes})
        break

    }
  }
  const AmountChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => {

    if (!event) {
      return;
    }
    switch(props.keyname) {

      case "GrossMonthlyIncomeSalary":
        updateSalary({key:salary.key, Name:salary.Name, Date:salary.Date, Amount:event.target.value, Notes:salary.Notes})
        break

      case "GrossMonthlyIncomeRealEstateRentals":
        updateRealEstateRentals({key:realEstateRentals.key, Name:realEstateRentals.Name, Date:realEstateRentals.Date, Amount:event.target.value, Notes:realEstateRentals.Notes})
        break

      case "GrossMonthlyIncomeBusiness":
        updateBusiness({key:business.key, Name:business.Name, Date:business.Date, Amount:event.target.value, Notes:business.Notes})
        break

      case "GrossMonthlyIncomeDividendStocks":
        updateDividendStocks({key:dividendStocks.key, Name:dividendStocks.Name, Date:dividendStocks.Date, Amount:event.target.value, Notes:dividendStocks.Notes})
        break

      case "GrossMonthlyIncomeOther":
        updateOther({key:other.key, Name:other.Name, Date:other.Date, Amount:event.target.value, Notes:other.Notes})
        break
    }
  }

  const NoteChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null) => {
    if (!event) {
      return;
    }
    switch(props.keyname) {

      case "GrossMonthlyIncomeSalary":
        updateSalary({key:salary.key, Name:salary.Name, Date:salary.Date, Amount:salary.Amount, Notes:event.target.value})
        break

      case "GrossMonthlyIncomeRealEstateRentals":
        updateRealEstateRentals({key:realEstateRentals.key, Name:realEstateRentals.Name, Date:realEstateRentals.Date, Amount:realEstateRentals.Amount, Notes:event.target.value})
        break

      case "GrossMonthlyIncomeBusiness":
        updateBusiness({key:business.key, Name:business.Name, Date:business.Date, Amount:business.Amount, Notes:event.target.value})
        break

      case "GrossMonthlyIncomeDividendStocks":
        updateDividendStocks({key:dividendStocks.key, Name:dividendStocks.Name, Date:dividendStocks.Date, Amount:dividendStocks.Amount, Notes:event.target.value})
        break

      case "GrossMonthlyIncomeOther":
        updateOther({key:other.key, Name:other.Name, Date:other.Date, Amount:other.Amount, Notes:event.target.value})
        break

      default:
        console.log(props.keyname)
    }
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
