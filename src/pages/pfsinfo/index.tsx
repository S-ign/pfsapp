import { type NextPage } from "next";
import Link from "next/link";

import Nav from "../../components/Nav"
import FormItem from "../../components/FormItem"

import useBoundStore from '../../slices/FormSlices'

const PfsInfo: NextPage = () => {
  //const salary = useBoundStore((state) => state.Salary)
  //const realEstateRentals = useBoundStore((state) => state.RealEstateRentals)
  //const business = useBoundStore((state) => state.Business)
  //const dividendStocks = useBoundStore((state) => state.DividendStocks)
  //const other = useBoundStore((state) => state.Other)
  //const gmi = [salary,realEstateRentals,business,dividendStocks,other]

  // GrossMonthlyIncome
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

  // GrossMonthlyExpenses
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

  const autoLoan = useBoundStore((state) => state.AutoLoan)
  const updateAutoLoan = useBoundStore((state) => state.updateAutoLoan)

  const autoInsurance = useBoundStore((state) => state.AutoInsurance)
  const updateAutoInsurance = useBoundStore((state) => state.updateAutoInsurance)

  const fuelCosts = useBoundStore((state) => state.FuelCosts)
  const updateFuelCosts = useBoundStore((state) => state.updateFuelCosts)

  const autoMaintenance = useBoundStore((state) => state.AutoMaintenance)
  const updateAutoMaintenance = useBoundStore((state) => state.updateAutoMaintenance)

  const groceries = useBoundStore((state) => state.Groceries)
  const updateGroceries = useBoundStore((state) => state.updateGroceries)

  const diningOut = useBoundStore((state) => state.DiningOut)
  const updateDiningOut = useBoundStore((state) => state.updateDiningOut)

  const healthInsurance = useBoundStore((state) => state.HealthInsurance)
  const updateHealthInsurance = useBoundStore((state) => state.updateHealthInsurance)

  const visionInsurance = useBoundStore((state) => state.VisionInsurance)
  const updateVisionInsurance = useBoundStore((state) => state.updateVisionInsurance)

  const dentalInsurance = useBoundStore((state) => state.DentalInsurance)
  const updateDentalInsurance = useBoundStore((state) => state.updateDentalInsurance)

  const childCare = useBoundStore((state) => state.ChildCare)
  const updateChildCare = useBoundStore((state) => state.updateChildCare)

  const childExpenses = useBoundStore((state) => state.ChildExpenses)
  const updateChildExpenses = useBoundStore((state) => state.updateChildExpenses)

  const studentLoan = useBoundStore((state) => state.StudentLoan)
  const updateStudentLoan = useBoundStore((state) => state.updateStudentLoan)

  const gmeLineOfCredit = useBoundStore((state) => state.gmeLineOfCredit)
  const updategmeLineOfCredit = useBoundStore((state) => state.updategmeLineOfCredit)

  const gmeCreditCard = useBoundStore((state) => state.gmeCreditCard)
  const updategmeCreditCard = useBoundStore((state) => state.updategmeCreditCard)

  const gmePersonalLoan = useBoundStore((state) => state.gmePersonalLoan)
  const updategmePersonalLoan = useBoundStore((state) => state.updategmePersonalLoan)

  const gmeOther = useBoundStore((state) => state.gmeOther)
  const updategmeOther = useBoundStore((state) => state.updategmeOther)

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
                <FormItem key={salary.key} keyname={salary.key} Name={salary.Name} Date={salary.Date} Amount={salary.Amount} Notes={salary.Notes} update={updateSalary} />
                <FormItem key={realEstateRentals.key} keyname={realEstateRentals.key} Name={realEstateRentals.Name} Date={realEstateRentals.Date} Amount={realEstateRentals.Amount} Notes={realEstateRentals.Notes} update={updateRealEstateRentals} />
                <FormItem key={business.key} keyname={business.key} Name={business.Name} Date={business.Date} Amount={business.Amount} Notes={business.Notes} update={updateBusiness} />
                <FormItem key={dividendStocks.key} keyname={dividendStocks.key} Name={dividendStocks.Name} Date={dividendStocks.Date} Amount={dividendStocks.Amount} Notes={dividendStocks.Notes} update={updateDividendStocks} />
                <FormItem key={other.key} keyname={other.key} Name={other.Name} Date={other.Date} Amount={other.Amount} Notes={other.Notes} update={updateOther} />
              {/*

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
              */}
            </div>
          
            {/* card section */}
            <div className="flex-row justify-center border border-4 rounded-lg w-full">
          
              {/* card title */}
              <h3 className="flex text-2xl justify-center bg-slate-400">Gross Monthly Expenses</h3>
                <FormItem key={gmeMortgage.key} keyname={gmeMortgage.key} Name={gmeMortgage.Name} Date={gmeMortgage.Date} Amount={gmeMortgage.Amount} Notes={gmeMortgage.Notes} update={updategmeMortgage} />

                <FormItem key={rent.key} keyname={rent.key} Name={rent.Name} Date={rent.Date} Amount={rent.Amount} Notes={rent.Notes} update={updateRent} />

                <FormItem key={insurance.key} keyname={insurance.key} Name={insurance.Name} Date={insurance.Date} Amount={insurance.Amount} Notes={insurance.Notes} update={updateInsurance} />

                <FormItem key={propertyTax.key} keyname={propertyTax.key} Name={propertyTax.Name} Date={propertyTax.Date} Amount={propertyTax.Amount} Notes={propertyTax.Notes} update={updatePropertyTax} />

                <FormItem key={homeMaintenance.key} keyname={homeMaintenance.key} Name={homeMaintenance.Name} Date={homeMaintenance.Date} Amount={homeMaintenance.Amount} Notes={homeMaintenance.Notes} update={updateHomeMaintenance} />

                <FormItem key={homeIncidentals.key} keyname={homeIncidentals.key} Name={homeIncidentals.Name} Date={homeIncidentals.Date} Amount={homeIncidentals.Amount} Notes={homeIncidentals.Notes} update={updateHomeIncidentals} />

                <FormItem key={electricity.key} keyname={electricity.key} Name={electricity.Name} Date={electricity.Date} Amount={electricity.Amount} Notes={electricity.Notes} update={updateElectricity} />

                <FormItem key={water.key} keyname={water.key} Name={water.Name} Date={water.Date} Amount={water.Amount} Notes={water.Notes} update={updateWater} />

                <FormItem key={garbage.key} keyname={garbage.key} Name={garbage.Name} Date={garbage.Date} Amount={garbage.Amount} Notes={garbage.Notes} update={updateGarbage} />

                <FormItem key={gas.key} keyname={gas.key} Name={gas.Name} Date={gas.Date} Amount={gas.Amount} Notes={gas.Notes} update={updateGas} />

                <FormItem key={internet.key} keyname={internet.key} Name={internet.Name} Date={internet.Date} Amount={internet.Amount} Notes={internet.Notes} update={updateInternet} />

                <FormItem key={phonePlan.key} keyname={phonePlan.key} Name={phonePlan.Name} Date={phonePlan.Date} Amount={phonePlan.Amount} Notes={phonePlan.Notes} update={updatePhonePlan} />

                <FormItem key={autoLoan.key} keyname={autoLoan.key} Name={autoLoan.Name} Date={autoLoan.Date} Amount={autoLoan.Amount} Notes={autoLoan.Notes} update={updateAutoLoan} />

                <FormItem key={autoInsurance.key} keyname={autoInsurance.key} Name={autoInsurance.Name} Date={autoInsurance.Date} Amount={autoInsurance.Amount} Notes={autoInsurance.Notes} update={updateAutoInsurance} />

                <FormItem key={fuelCosts.key} keyname={fuelCosts.key} Name={fuelCosts.Name} Date={fuelCosts.Date} Amount={fuelCosts.Amount} Notes={fuelCosts.Notes} update={updateFuelCosts} />

                <FormItem key={autoMaintenance.key} keyname={autoMaintenance.key} Name={autoMaintenance.Name} Date={autoMaintenance.Date} Amount={autoMaintenance.Amount} Notes={autoMaintenance.Notes} update={updateAutoMaintenance} />

                <FormItem key={groceries.key} keyname={groceries.key} Name={groceries.Name} Date={groceries.Date} Amount={groceries.Amount} Notes={groceries.Notes} update={updateGroceries} />

                <FormItem key={diningOut.key} keyname={diningOut.key} Name={diningOut.Name} Date={diningOut.Date} Amount={diningOut.Amount} Notes={diningOut.Notes} update={updateDiningOut} />

                <FormItem key={healthInsurance.key} keyname={healthInsurance.key} Name={healthInsurance.Name} Date={healthInsurance.Date} Amount={healthInsurance.Amount} Notes={healthInsurance.Notes} update={updateHealthInsurance} />

                <FormItem key={visionInsurance.key} keyname={visionInsurance.key} Name={visionInsurance.Name} Date={visionInsurance.Date} Amount={visionInsurance.Amount} Notes={visionInsurance.Notes} update={updateVisionInsurance} />

                <FormItem key={dentalInsurance.key} keyname={dentalInsurance.key} Name={dentalInsurance.Name} Date={dentalInsurance.Date} Amount={dentalInsurance.Amount} Notes={dentalInsurance.Notes} update={updateDentalInsurance} />

                <FormItem key={childCare.key} keyname={childCare.key} Name={childCare.Name} Date={childCare.Date} Amount={childCare.Amount} Notes={childCare.Notes} update={updateChildCare} />

                <FormItem key={childExpenses.key} keyname={childExpenses.key} Name={childExpenses.Name} Date={childExpenses.Date} Amount={childExpenses.Amount} Notes={childExpenses.Notes} update={updateChildExpenses} />

                <FormItem key={studentLoan.key} keyname={studentLoan.key} Name={studentLoan.Name} Date={studentLoan.Date} Amount={studentLoan.Amount} Notes={studentLoan.Notes} update={updateStudentLoan} />

                <FormItem key={gmeLineOfCredit.key} keyname={gmeLineOfCredit.key} Name={gmeLineOfCredit.Name} Date={gmeLineOfCredit.Date} Amount={gmeLineOfCredit.Amount} Notes={gmeLineOfCredit.Notes} update={updategmeLineOfCredit} />

                <FormItem key={gmeCreditCard.key} keyname={gmeCreditCard.key} Name={gmeCreditCard.Name} Date={gmeCreditCard.Date} Amount={gmeCreditCard.Amount} Notes={gmeCreditCard.Notes} update={updategmeCreditCard} />

                <FormItem key={gmePersonalLoan.key} keyname={gmePersonalLoan.key} Name={gmePersonalLoan.Name} Date={gmePersonalLoan.Date} Amount={gmePersonalLoan.Amount} Notes={gmePersonalLoan.Notes} update={updategmePersonalLoan} />

                <FormItem key={gmeOther.key} keyname={gmeOther.key} Name={gmeOther.Name} Date={gmeOther.Date} Amount={gmeOther.Amount} Notes={gmeOther.Notes} update={updategmeOther} />
              {/*
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
              */}
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

