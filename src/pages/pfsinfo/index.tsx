import { type NextPage } from "next";
import { trpc } from "../../utils/trpc"
import Link from "next/link";
import useBoundStore from '../../slices/FormSlices'

import Nav from "../../components/Nav"
import GrossMonthlyIncomeCard from "../../components/GrossMonthlyIncomeCard"
import GrossMonthlyExpensesCard from "../../components/GrossMonthlyExpensesCard"


const PfsInfo: NextPage = () => {
  const gmi = useBoundStore((state) => state.GrossMonthlyIncome)
  const gmi2 = {
    Salary: {create: {...gmi.Salary}},
    RealEstateRentals: {create: {...gmi.RealEstateRentals}},
    Business: {create: {...gmi.Business}},
    DividendStocks: {create: {...gmi.DividendStocks}},
    Other: {create: {...gmi.Other}},
  }

  const postGMI = trpc.userForm.postGMI.useMutation()

  const saveHandler = () => {
    postGMI.mutate(gmi2)
  }

  return (
    <>
      {/* create space in between each section */}
      <div className="flex-row w-full space-y-10">
        <Nav className="bg-slate-500/75"/>
        <h1 className="flex text-3xl shadow-lg border rounded bg-white">Cashflow Worksheet</h1>
      </div>

    <div className="flex flex-wrap justify-center justify-items-center items-center bg-white space-y-10 m-10">
      <GrossMonthlyIncomeCard />
      <GrossMonthlyExpensesCard />

            <div className="flex-row">
              <button onClick={saveHandler} className="border w-40 h-12 bg-green-700 m-4 rounded-md shadow-md">Save</button>
              <Link href="/dashboard">
                <button className="border w-40 h-12 bg-rose-900 m-4 rounded-md shadow-md">Cancel</button>
              </Link>
            </div>
          </div>

    </>
  );
};

export default PfsInfo;
