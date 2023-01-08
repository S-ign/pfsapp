import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import DatePicker from "./DatePicker";

import useBoundStore from '../slices/FormSlices'

export default function FormItem(props: {key: string, keyname: string, Name: string, Date: string, Amount: string, Notes: string,
 update: {
  key: string;
  Name: string;
  Date: string;
  Amount: string;
  Notes: string;
 }}) {

  const salary = useBoundStore((state) => state.Salary)
  const updateSalary = useBoundStore((state) => state.updateSalary)
  const realEstateRentals = useBoundStore((state) => state.RealEstateRentals)
  const updateRealEstateRentals = useBoundStore((state) => state.updateRealEstateRentals)
  const business = useBoundStore((state) => state.Business)
  const updateBusiness = useBoundStore((state) => state.updateBusiness)
  const dividendStocks = useBoundStore((state) => state.DividendStocks)
  const updateDividendStocks = useBoundStore((state) => state.updateDividendStocks)
  const other = useBoundStore((state) => state.Other)
  const updateOther = useBoundStore((state) => state.updateOther)

  const gmeMortgage = useBoundStore((state) => state.gmeMortgage)
  const updategmeMortgage = useBoundStore((state) => state.updategmeMortgage)
  const rent = useBoundStore((state) => state.Rent)
  const updateRent = useBoundStore((state) => state.updateRent)
  const insurance = useBoundStore((state) => state.Insurance)
  const updateInsurance = useBoundStore((state) => state.updateInsurance)
  const propertyTax = useBoundStore((state) => state.PropertyTax)
  const updatePropertyTax = useBoundStore((state) => state.updatePropertyTax)
  const homeMaintenance = useBoundStore((state) => state.HomeMaintenance)
  const updateHomeMaintenance = useBoundStore((state) => state.updateHomeMaintenance)
  const homeIncidentals = useBoundStore((state) => state.HomeIncidentals)
  const updateHomeIncidentals = useBoundStore((state) => state.updateHomeIncidentals)
  const electricity = useBoundStore((state) => state.Electricity)
  const updateElectricity = useBoundStore((state) => state.updateElectricity)
  const water = useBoundStore((state) => state.Water)
  const updateWater = useBoundStore((state => state.updateWater))
  const garbage = useBoundStore((state) => state.Garbage)
  const updateGarbage = useBoundStore((state) => state.updateGarbage)
  const gas = useBoundStore((state) => state.Gas)
  const updateGas = useBoundStore((state) => state.updateGas)
  const internet = useBoundStore((state) => state.Internet)
  const updateInternet = useBoundStore((state) => state.updateInternet)
  const phonePlan = useBoundStore((state) => state.PhonePlan)
  const updatePhonePlan = useBoundStore((state) => state.updatePhonePlan)

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

      case "gmeMortgage":
        updategmeMortgage({key:gmeMortgage.key, Name:gmeMortgage.Name, Date:date, Amount:gmeMortgage.Amount, Notes:gmeMortgage.Notes})
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
