import useBoundStore from '../slices/FormSlices'
import GrossMonthlyIncomeFormItem from "../components/GrossMonthlyIncomeFormItem"

const GrossMonthlyIncomeCard = () => {
  const gmi = useBoundStore((state) => state.GrossMonthlyIncome)
  const updateGrossMonthlyIncome = useBoundStore((state) => state.updateGrossMonthlyIncome)

  return (
      <div className="flex-row justify-center border border-4 rounded-lg w-full">
    
        
        {/* card title */}
        <h3 className="flex text-2xl justify-center bg-slate-400">Gross Monthly Income</h3>


        <GrossMonthlyIncomeFormItem key={gmi.Salary.key} item={gmi.Salary.key} GrossMonthlyIncome={gmi} updateGrossMonthlyIncome={updateGrossMonthlyIncome} inputs={{name:gmi.Salary.Name, date:gmi.Salary.Date, amount:gmi.Salary.Amount, notes:gmi.Salary.Notes}}/>
          <GrossMonthlyIncomeFormItem key={gmi.RealEstateRentals.key} item={gmi.RealEstateRentals.key} GrossMonthlyIncome={gmi} updateGrossMonthlyIncome={updateGrossMonthlyIncome} inputs={{name:gmi.RealEstateRentals.Name, date:gmi.RealEstateRentals.Date, amount:gmi.RealEstateRentals.Amount, notes:gmi.RealEstateRentals.Notes}}/>
          <GrossMonthlyIncomeFormItem key={gmi.Business.key} item={gmi.Business.key} GrossMonthlyIncome={gmi} updateGrossMonthlyIncome={updateGrossMonthlyIncome} inputs={{name:gmi.Business.Name, date:gmi.Business.Date, amount:gmi.Business.Amount, notes:gmi.Business.Notes}}/>
          <GrossMonthlyIncomeFormItem key={gmi.DividendStocks.key} item={gmi.DividendStocks.key} GrossMonthlyIncome={gmi} updateGrossMonthlyIncome={updateGrossMonthlyIncome} inputs={{name:gmi.DividendStocks.Name, date:gmi.DividendStocks.Date, amount:gmi.DividendStocks.Amount, notes:gmi.DividendStocks.Notes}}/>
          <GrossMonthlyIncomeFormItem key={gmi.Other.key} item={gmi.Other.key} GrossMonthlyIncome={gmi} updateGrossMonthlyIncome={updateGrossMonthlyIncome} inputs={{name:gmi.Other.Name, date:gmi.Other.Date, amount:gmi.Other.Amount, notes:gmi.Other.Notes}}/>

      </div>
  )
}

export default GrossMonthlyIncomeCard

