import { type NextPage } from "next";
import Link from "next/link";

import Nav from "../../components/Nav"
import FormItem from "../../components/FormItem"
import AssetFormItem from "../../components/AssetFormItem"
import LiabilitiesFormItem from "../../components/LiabilitiesFormItem"

import useBoundStore from '../../slices/FormSlices'

const PfsInfo: NextPage = () => {
  const salary = useBoundStore((state) => state.Salary)
  const realEstateRentals = useBoundStore((state) => state.RealEstateRentals)
  const business = useBoundStore((state) => state.Business)
  const dividendStocks = useBoundStore((state) => state.DividendStocks)
  const other = useBoundStore((state) => state.Other)
  const gmi = [salary,realEstateRentals,business,dividendStocks,other]

  const gmeMortgage = useBoundStore((state) => state.gmeMortgage)
  const rent = useBoundStore((state) => state.Rent)
  const insurance = useBoundStore((state) => state.Insurance)
  const propertyTax = useBoundStore((state) => state.PropertyTax)
  const homeMaintenance = useBoundStore((state) => state.HomeMaintenance)
  const homeIncidentals = useBoundStore((state) => state.HomeIncidentals)
  const electricity = useBoundStore((state) => state.Electricity)
  const water = useBoundStore((state) => state.Water)
  const garbage = useBoundStore((state) => state.Garbage)
  const gas = useBoundStore((state) => state.Gas)
  const internet = useBoundStore((state) => state.Internet)
  const phonePlan = useBoundStore((state) => state.PhonePlan)
  const autoLoan = useBoundStore((state) => state.AutoLoan)
  const autoInsurance = useBoundStore((state) => state.AutoInsurance)
  const fuelCosts = useBoundStore((state) => state.FuelCosts)
  const autoMaintenance = useBoundStore((state) => state.AutoMaintenance)
  const groceries = useBoundStore((state) => state.Groceries)
  const diningOut = useBoundStore((state) => state.DiningOut)
  const healthInsurance = useBoundStore((state) => state.HealthInsurance)
  const visionInsurance = useBoundStore((state) => state.VisionInsurance)
  const dentalInsurance = useBoundStore((state) => state.DentalInsurance)
  const childCare = useBoundStore((state) => state.ChildCare)
  const childExpenses = useBoundStore((state) => state.ChildExpenses)
  const studentLoan = useBoundStore((state) => state.StudentLoan)
  const gmeLineOfCredit = useBoundStore((state) => state.gmeLineOfCredit)
  const gmeCreditCard = useBoundStore((state) => state.gmeCreditCard)
  const gmePersonalLoan = useBoundStore((state) => state.gmePersonalLoan)
  const gmeOther = useBoundStore((state) => state.gmeOther)
  const gme = [gmeMortgage, rent, insurance, propertyTax, homeMaintenance, homeIncidentals, electricity, water, garbage, gas, internet, phonePlan, autoLoan,autoInsurance, fuelCosts, autoMaintenance, groceries, diningOut, healthInsurance, visionInsurance, dentalInsurance, childCare, childExpenses, studentLoan, gmeLineOfCredit, gmeCreditCard, gmePersonalLoan, gmeOther]

  const saveHandler = () => {}

  return (
    <>
      {/* create space in between each section */}
      <div className="flex-row w-full space-y-10">
        <Nav className="bg-slate-500/75"/>
        <h1 className="flex text-3xl shadow-lg border rounded bg-white">Cashflow Worksheet</h1>
      </div>


        {/* container for form */}
          <div className="flex flex-wrap justify-center justify-items-center items-center bg-white space-y-10 m-10">
          
            {/* card section */}
            <div className="flex-row justify-center border border-4 rounded-lg w-full">
          
              
              {/* card title */}
              <h3 className="flex text-2xl justify-center bg-slate-400">Gross Monthly Income</h3>
              <>
                {
                  (gmi !== undefined)
                    &&
                      gmi.map(({key, Name, Date, Amount, Notes}) => {
                      console.log(key, Name,Date, Amount, Notes)
                      return (
                        <FormItem 
                          key={key} keyname={key} Name={Name} Date={Date} Amount={Amount} Notes={Notes}
                        />
                      )
                      })
                }
              </> 
            </div>
          
            {/* card section */}
            <div className="flex-row justify-center border border-4 rounded-lg w-full">
          
              {/* card title */}
              <h3 className="flex text-2xl justify-center bg-slate-400">Gross Monthly Expenses</h3>
              <>
                {
                  (gme !== undefined)
                    &&
                      gme.map(({key, Name, Date, Amount, Notes}) => {
                      console.log(key, Name,Date, Amount, Notes)
                      return (
                        <FormItem 
                          key={key} keyname={key} Name={Name} Date={Date} Amount={Amount} Notes={Notes}
                        />
                      )
                      })
                }
              </> 
            </div>

            {/* Assets card section */}

            {/* Liabilities card section */}

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

