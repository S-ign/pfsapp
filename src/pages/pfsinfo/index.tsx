import { type NextPage } from "next";
//import Link from "next/link";

import Nav from "../../components/Nav"
import FormItem from "../../components/FormItem"

const PfsInfo: NextPage = () => {

  return (
    <>
      {/* create space in between each section */}
      <div className="flex-row w-full space-y-10">
        <Nav className="bg-slate-500/75"/>
        <h1 className="flex text-3xl shadow-lg border rounded bg-white">Cashflow Worksheet</h1>
      </div>


        {/* container for form */}
        <center>
          <div className="justify-center items-center bg-white space-y-10 m-10">
          
            {/* card section */}
            <div className="flex-row flex-none justify-center border border-4 rounded-lg w-8/12">
          
              {/* card title */}
              <h3 className="flex text-2xl justify-center bg-slate-400">Gross Monthly Income</h3>
              <FormItem 
                itemName="Salary"
                datelabel="Date Received"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Real Estate Rentals"
                datelabel="Date Received"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Business"
                datelabel="Date Received"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Dividend Stocks"
                datelabel="Date Received"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Other"
                datelabel="Date Received"
                textlabel="Amount"
              />
            </div>
          
            {/* card section */}
            <div className="flex-row flex-none justify-center border border-4 rounded-lg w-8/12">
          
              {/* card title */}
              <h3 className="flex text-2xl justify-center bg-slate-400">Gross Monthly Expenses</h3>
              <FormItem 
                itemName="Mortgage"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Rent"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Insurance"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Property Tax"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Home Maintenance"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Home Incidentals"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Electricity"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Water"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Garbage"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Gas"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Internet"
                datelabel="Due Date"
                textlabel="Amount"
              />
              <FormItem 
                itemName="Phone Plan"
                datelabel="Due Date"
                textlabel="Amount"
              />
            </div>
          </div>
        </center>

    </>
  );
};

export default PfsInfo;

