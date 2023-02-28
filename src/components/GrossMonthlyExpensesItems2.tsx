import useBoundStore from '../slices/FormSlices'
import GrossMonthlyExpensesFormItem from "../components/GrossMonthlyExpensesFormItem"

const GrossMonthlyExpensesItems2 = () => {
  const gme = useBoundStore((state) => state.GrossMonthlyExpenses)
  const updateGrossMonthlyExpenses = useBoundStore((state) => state.updateGrossMonthlyExpenses)
  return (
      <div>
      <GrossMonthlyExpensesFormItem key={gme.FuelCosts.key} item={gme.FuelCosts.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.FuelCosts.Name, date:gme.FuelCosts.Date, amount:gme.FuelCosts.Amount, notes:gme.FuelCosts.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.AutoMaintenance.key} item={gme.AutoMaintenance.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.AutoMaintenance.Name, date:gme.AutoMaintenance.Date, amount:gme.AutoMaintenance.Amount, notes:gme.AutoMaintenance.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.Groceries.key} item={gme.Groceries.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.Groceries.Name, date:gme.Groceries.Date, amount:gme.Groceries.Amount, notes:gme.Groceries.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.DiningOut.key} item={gme.DiningOut.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.DiningOut.Name, date:gme.DiningOut.Date, amount:gme.DiningOut.Amount, notes:gme.DiningOut.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.HealthInsurance.key} item={gme.HealthInsurance.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.HealthInsurance.Name, date:gme.HealthInsurance.Date, amount:gme.HealthInsurance.Amount, notes:gme.HealthInsurance.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.VisionInsurance.key} item={gme.VisionInsurance.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.VisionInsurance.Name, date:gme.VisionInsurance.Date, amount:gme.VisionInsurance.Amount, notes:gme.VisionInsurance.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.DentalInsurance.key} item={gme.DentalInsurance.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.DentalInsurance.Name, date:gme.DentalInsurance.Date, amount:gme.DentalInsurance.Amount, notes:gme.DentalInsurance.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.ChildCare.key} item={gme.ChildCare.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.ChildCare.Name, date:gme.ChildCare.Date, amount:gme.ChildCare.Amount, notes:gme.ChildCare.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.ChildExpenses.key} item={gme.ChildExpenses.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.ChildExpenses.Name, date:gme.ChildExpenses.Date, amount:gme.ChildExpenses.Amount, notes:gme.ChildExpenses.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.StudentLoan.key} item={gme.StudentLoan.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.StudentLoan.Name, date:gme.StudentLoan.Date, amount:gme.StudentLoan.Amount, notes:gme.StudentLoan.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.LineOfCredit.key} item={gme.LineOfCredit.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.LineOfCredit.Name, date:gme.LineOfCredit.Date, amount:gme.LineOfCredit.Amount, notes:gme.LineOfCredit.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.CreditCard.key} item={gme.CreditCard.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.CreditCard.Name, date:gme.CreditCard.Date, amount:gme.CreditCard.Amount, notes:gme.CreditCard.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.PersonalLoan.key} item={gme.PersonalLoan.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.PersonalLoan.Name, date:gme.PersonalLoan.Date, amount:gme.PersonalLoan.Amount, notes:gme.PersonalLoan.Notes}}/>
      <GrossMonthlyExpensesFormItem key={gme.Other.key} item={gme.Other.key} GrossMonthlyExpenses={gme} updateGrossMonthlyExpenses={updateGrossMonthlyExpenses} inputs={{name:gme.Other.Name, date:gme.Other.Date, amount:gme.Other.Amount, notes:gme.Other.Notes}}/>
      </div>
  )}

export default GrossMonthlyExpensesItems2

