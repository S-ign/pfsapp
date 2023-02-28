import GrossMonthlyExpensesItems1 from "../components/GrossMonthlyExpensesItems1"
import GrossMonthlyExpensesItems2 from "../components/GrossMonthlyExpensesItems2"

const GrossMonthlyExpensesCard = () => {

  return (
    <div className="flex-row justify-center border border-4 rounded-lg w-full">
      <h3 className="flex text-2xl justify-center bg-slate-400">Gross Monthly Expenses</h3>

      <GrossMonthlyExpensesItems1 />
      <GrossMonthlyExpensesItems2 />

    </div>

  )
}

export default GrossMonthlyExpensesCard
