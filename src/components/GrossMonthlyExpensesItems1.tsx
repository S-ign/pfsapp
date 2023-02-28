import useBoundStore from '../slices/FormSlices'
import GrossMonthlyExpensesFormItem from "../components/GrossMonthlyExpensesFormItem"

const GrossMonthlyExpensesItems1 = () => {
  const gme = useBoundStore((state) => state.GrossMonthlyExpenses)
  const updateGrossMonthlyExpenses = useBoundStore((state) => state.updateGrossMonthlyExpenses)
  return (
      <div>
        <GrossMonthlyExpensesFormItem key={gme.Mortgage.key} item={gme.Mortgage.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.Mortgage.Name, date:gme.Mortgage.Date, amount:gme.Mortgage.Amount, notes:gme.Mortgage.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.Rent.key} item={gme.Rent.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.Rent.Name, date:gme.Rent.Date, amount:gme.Rent.Amount, notes:gme.Rent.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.Insurance.key} item={gme.Insurance.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.Insurance.Name, date:gme.Insurance.Date, amount:gme.Insurance.Amount, notes:gme.Insurance.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.PropertyTax.key} item={gme.PropertyTax.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.PropertyTax.Name, date:gme.PropertyTax.Date, amount:gme.PropertyTax.Amount, notes:gme.PropertyTax.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.HomeMaintenance.key} item={gme.HomeMaintenance.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.HomeMaintenance.Name, date:gme.HomeMaintenance.Date, amount:gme.HomeMaintenance.Amount, notes:gme.HomeMaintenance.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.HomeIncidentals.key} item={gme.HomeIncidentals.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.HomeIncidentals.Name, date:gme.HomeIncidentals.Date, amount:gme.HomeIncidentals.Amount, notes:gme.HomeIncidentals.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.Electricity.key} item={gme.Electricity.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.Electricity.Name, date:gme.Electricity.Date, amount:gme.Electricity.Amount, notes:gme.Electricity.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.Water.key} item={gme.Water.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.Water.Name, date:gme.Water.Date, amount:gme.Water.Amount, notes:gme.Water.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.Garbage.key} item={gme.Garbage.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.Garbage.Name, date:gme.Garbage.Date, amount:gme.Garbage.Amount, notes:gme.Garbage.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.Gas.key} item={gme.Gas.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.Gas.Name, date:gme.Gas.Date, amount:gme.Gas.Amount, notes:gme.Gas.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.Internet.key} item={gme.Internet.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.Internet.Name, date:gme.Internet.Date, amount:gme.Internet.Amount, notes:gme.Internet.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.PhonePlan.key} item={gme.PhonePlan.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.PhonePlan.Name, date:gme.PhonePlan.Date, amount:gme.PhonePlan.Amount, notes:gme.PhonePlan.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.AutoLoan.key} item={gme.AutoLoan.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.AutoLoan.Name, date:gme.AutoLoan.Date, amount:gme.AutoLoan.Amount, notes:gme.AutoLoan.Notes}}/>
        <GrossMonthlyExpensesFormItem key={gme.AutoInsurance.key} item={gme.AutoInsurance.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.AutoInsurance.Name, date:gme.AutoInsurance.Date, amount:gme.AutoInsurance.Amount, notes:gme.AutoInsurance.Notes}}/>
        
      </div>
  )}

export default GrossMonthlyExpensesItems1
