import create from 'zustand'

import type { GrossMonthlyIncomeType, GrossMonthlyExpensesType } from "../types/form"

import type { StateCreator } from 'zustand'

interface GrossMonthlyIncomeSlice {
  GrossMonthlyIncome: GrossMonthlyIncomeType,
  updateGrossMonthlyIncome: (GrossMonthlyIncome: GrossMonthlyIncomeType) => void,
}

  // & Assets & Liabilities,
const createGrossMonthlyIncomeSlice: StateCreator<
  GrossMonthlyIncomeSlice & GrossMonthlyExpensesSlice,
  [],
  [],
  GrossMonthlyIncomeSlice
  > = (set) => ({

    GrossMonthlyIncome: {
      Salary: {
        key: 'GrossMonthlyIncomeSalary',
        Name: 'Salary',
        Date: '',
        Amount: '',
        Notes: '',
      },
      RealEstateRentals: {
        key: 'GrossMonthlyIncomeRealEstateRentals',
        Name: 'Real Estate Rentals',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Business: {
        key: 'GrossMonthlyIncomeBusiness',
        Name: 'Business',
        Date: '',
        Amount: '',
        Notes: '',
      },
      DividendStocks: {
        key: 'GrossMonthlyIncomeDividendStocks',
        Name: 'Dividend Stocks',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Other: {
        key: 'GrossMonthlyIncomeOther',
        Name: 'Other',
        Date: '',
        Amount: '',
        Notes: '',
      }
    },
    updateGrossMonthlyIncome: (GrossMonthlyIncome) => set({GrossMonthlyIncome}),
  })

interface GrossMonthlyExpensesSlice {
  GrossMonthlyExpenses: GrossMonthlyExpensesType,
  updateGrossMonthlyExpenses: (GrossMonthlyExpenses: GrossMonthlyExpensesType) => void,
}

//& Assets & Liabilities,
const createGrossMonthlyExpensesSlice: StateCreator<
  GrossMonthlyIncomeSlice & GrossMonthlyExpensesSlice,
  [],
  [],
  GrossMonthlyExpensesSlice
  > = (set) => ({

    GrossMonthlyExpenses: {
      Mortgage: {
        key: 'GrossMonthlyExpensesMortgage',
        Name: 'Mortgage',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Rent: {
        key: 'GrossMonthlyExpensesRent',
        Name: 'Rent',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Insurance: {
        key: 'GrossMonthlyExpensesInsurance',
        Name: 'Insurance',
        Date: '',
        Amount: '',
        Notes: '',
      },
      PropertyTax: {
        key: 'GrossMonthlyExpensesPropertyTax',
        Name: 'Property Tax',
        Date: '',
        Amount: '',
        Notes: '',
      },
      HomeMaintenance: {
        key: 'GrossMonthlyExpensesHomeMaintenance',
        Name: 'Home Maintenance',
        Date: '',
        Amount: '',
        Notes: '',
      },
      HomeIncidentals: {
        key: 'GrossMonthlyExpensesHomeIncidentals',
        Name: 'Home Incidentals',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Electricity: {
        key: 'GrossMonthlyExpensesElectricity',
        Name: 'Electricity',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Water: {
        key: 'GrossMonthlyExpensesWater',
        Name: 'Water',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Garbage: {
        key: 'GrossMonthlyExpensesGarbage',
        Name: 'Garbage',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Gas: {
        key: 'GrossMonthlyExpensesGas',
        Name: 'Gas',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Internet: {
        key: 'GrossMonthlyExpensesInternet',
        Name: 'Internet',
        Date: '',
        Amount: '',
        Notes: '',
      },
      PhonePlan: {
        key: 'GrossMonthlyExpensesPhonePlan',
        Name: 'Phone Plan',
        Date: '',
        Amount: '',
        Notes: '',
      },
      AutoLoan: {
        key: 'GrossMonthlyExpensesAutoLoan',
        Name: 'Auto Loan',
        Date: '',
        Amount: '',
        Notes: '',
      },
      AutoInsurance: {
        key: 'GrossMonthlyExpensesAutoInsurance',
        Name: 'Auto Insurance',
        Date: '',
        Amount: '',
        Notes: '',
      },
      FuelCosts: {
        key: 'GrossMonthlyExpensesFuelCosts',
        Name: 'Fuel Costs',
        Date: '',
        Amount: '',
        Notes: '',
      },
      AutoMaintenance: {
        key: 'GrossMonthlyExpensesAutoMaintenance',
        Name: 'Auto Maintenance',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Groceries: {
        key: 'GrossMonthlyExpensesGroceries',
        Name: 'Groceries',
        Date: '',
        Amount: '',
        Notes: '',
      },
      DiningOut: {
        key: 'GrossMonthlyExpensesDiningOut',
        Name: 'Dining Out',
        Date: '',
        Amount: '',
        Notes: '',
      },
      HealthInsurance: {
        key: 'GrossMonthlyExpensesHealthInsurance',
        Name: 'Health Insurance',
        Date: '',
        Amount: '',
        Notes: '',
      },
      VisionInsurance: {
        key: 'GrossMonthlyExpensesVisionInsurance',
        Name: 'Vision Insurance',
        Date: '',
        Amount: '',
        Notes: '',
      },
      DentalInsurance: {
        key: 'GrossMonthlyExpensesDentalInsurance',
        Name: 'Dental Insurance',
        Date: '',
        Amount: '',
        Notes: '',
      },
      ChildCare: {
        key: 'GrossMonthlyExpensesChildCare',
        Name: 'Child Care',
        Date: '',
        Amount: '',
        Notes: '',
      },
      ChildExpenses: {
        key: 'GrossMonthlyExpensesChildExpenses',
        Name: 'Child Expenses',
        Date: '',
        Amount: '',
        Notes: '',
      },
      StudentLoan: {
        key: 'GrossMonthlyExpensesStudentLoan',
        Name: 'Student Loan',
        Date: '',
        Amount: '',
        Notes: '',
      },
      LineOfCredit: {
        key: 'GrossMonthlyExpensesLineOfCredit',
        Name: 'Line Of Credit',
        Date: '',
        Amount: '',
        Notes: '',
      },
      CreditCard: {
        key: 'GrossMonthlyExpensesCreditCard',
        Name: 'Credit Card',
        Date: '',
        Amount: '',
        Notes: '',
      },
      PersonalLoan: {
        key: 'GrossMonthlyExpensesPersonalLoan',
        Name: 'Personal Loan',
        Date: '',
        Amount: '',
        Notes: '',
      },
      Other: {
        key: 'GrossMonthlyExpensesOther',
        Name: 'Other',
        Date: '',
        Amount: '',
        Notes: '',
      },
    },
    updateGrossMonthlyExpenses: (GrossMonthlyExpenses) => set({GrossMonthlyExpenses}),

  })

//interface Assets {
//  MarketValueOfHomes: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateMarketValueOfHomes: (
//    MarketValueOfHomes: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  MutualFunds: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateMutualFunds: (
//    MutualFunds: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  Stocks: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateStocks: (
//    Stocks: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  Annuities: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateAnnuities: (
//    Annuities: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  Cash: {
//    key: string,
//    Name: string,
//    ValueLifeValue: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateCash: (
//    Cash: {
//      key: string,
//      Name: string,
//      ValueLifeValue: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  SavingsAccount: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateSavingsAccount: (
//    SavingsAccount: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  CheckingsAccount: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateCheckingsAccount: (
//    CheckingsAccount: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  RetirementPlans: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateRetirementPlans: (
//    RetirementPlans: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  RothRetirementPlans: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateRothRetirementPlans: (
//    RothRetirementPlans: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  Pensiosn: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updatePensiosn: (
//    Pensiosn: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  CertificateOfDeposit: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateCertificateOfDeposit: (
//    CertificateOfDeposit: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//
//  OtherAssets: {
//    key: string,
//    Name: string,
//    Value: number,
//    Interest: number,
//    Notes: string,
//  },
//  updateOtherAssets: (
//    OtherAssets: {
//      key: string,
//      Name: string,
//      Value: number,
//      Interest: number,
//      Notes: string,
//    }
//  ) => void,
//}

//const createAssetsSlice: StateCreator<
//  GrossMonthlyIncomeSlice & GrossMonthlyExpensesSlice & Assets & Liabilities,
//  [],
//  [],
//  Assets
//  > = (set) => ({
//    AssetsFormData: {
//      MarketValueOfHomesValue: 0,
//      MarketValueOfHomesInterest: 0,
//      MarketValueOfHomesNotes: '',
//      MutualFundsValue: 0,
//      MutualFundsInterest: 0,
//      MutualFundsNotes: '',
//      StocksValue: 0,
//      StocksInterest: 0,
//      StocksNotes: '',
//      AnnuitiesValue: 0,
//      AnnuitiesInterest: 0,
//      AnnuitiesNotes: '',
//      CashValueLifeValue: 0,
//      CashValueLifeInterest: 0,
//      CashValueLifeNotes: '',
//      SavingsAccountValue: 0,
//      SavingsAccountInterest: 0,
//      SavingsAccountNotes: '',
//      CheckingsAccountValue: 0,
//      CheckingsAccountInterest: 0,
//      CheckingsAccountNotes: '',
//      RetirementPlansValue: 0,
//      RetirementPlansInterest: 0,
//      RetirementPlansNotes: '',
//      RothRetirementPlansValue: 0,
//      RothRetirementPlansInterest: 0,
//      RothRetirementPlansNotes: '',
//      PensiosnValue: 0,
//      PensiosnInterest: 0,
//      PensiosnNotes: '',
//      CertificateOfDepositValue: 0,
//      CertificateOfDepositInterest: 0,
//      CertificateOfDepositNotes: '',
//      OtherAssetsValue: 0,
//      OtherAssetsInterest: 0,
//      OtherAssetsNotes: '',
//    },
//    update: () => set((state) => ({ AssetsFormData: state.AssetsFormData })),
//  })
//
//interface Liabilities {
//  Mortgage: {
//    key: string,
//    Name: string,
//    Amount: number,
//    Interest: number,
//    Payment: number,
//    Notes: string,
//  },
//  updateMortgage: (
//    Mortgage: {
//      key: string,
//      Name: string,
//      Amount: number,
//      Interest: number,
//      Payment: number,
//      Notes: string,
//    }
//  ) => void,
//
//  CarLoan: {
//    key: string,
//    Name: string,
//    Amount: number,
//    Interest: number,
//    Payment: number,
//    Notes: string,
//  },
//  updateCarLoan: (
//    CarLoan: {
//      key: string,
//      Name: string,
//      Amount: number,
//      Interest: number,
//      Payment: number,
//      Notes: string,
//    }
//  ) => void,
//
//  CreditCard: {
//    key: string,
//    Name: string,
//    Amount: number,
//    Interest: number,
//    Payment: number,
//    Notes: string,
//  },
//  updateCreditCard: (
//    CreditCard: {
//      key: string,
//      Name: string,
//      Amount: number,
//      Interest: number,
//      Payment: number,
//      Notes: string,
//    }
//  ) => void,
//
//  PersonalLoan: {
//    key: string,
//    Name: string,
//    Amount: number,
//    Interest: number,
//    Payment: number,
//    Notes: string,
//  },
//  updatePersonalLoan: (
//    PersonalLoan: {
//      key: string,
//      Name: string,
//      Amount: number,
//      Interest: number,
//      Payment: number,
//      Notes: string,
//    }
//  ) => void,
//
//  LineOfCredit: {
//    key: string,
//    Name: string,
//    Amount: number,
//    Interest: number,
//    Payment: number,
//    Notes: string,
//  },
//  updateLineOfCredit: (
//    LineOfCredit: {
//      key: string,
//      Name: string,
//      Amount: number,
//      Interest: number,
//      Payment: number,
//      Notes: string,
//    }
//  ) => void,
//
//  OtherLoan: {
//    key: string,
//    Name: string,
//    Amount: number,
//    Interest: number,
//    Payment: number,
//    Notes: string,
//  },
//  updateOtherLoan: (
//    OtherLoan: {
//      key: string,
//      Name: string,
//      Amount: number,
//      Interest: number,
//      Payment: number,
//      Notes: string,
//    }
//  ) => void,
//}
//
//const createLiabilitiesSlice: StateCreator<
//  GrossMonthlyIncomeSlice & GrossMonthlyExpensesSlice & Assets & Liabilities,
//  [],
//  [],
//  Liabilities
//  > = (set) => ({
//    LiabilitiesFormData: {
//      MortgageAmount: 0,
//      MortgageInterest: 0,
//      MortgageMinimumPayment: 0,
//      MortgageNotes: '',
//      CarLoanAmount: 0,
//      CarLoanInterest: 0,
//      CarLoanMinimumPayment: 0,
//      CarLoanNotes: '',
//      CreditCardAmount: 0,
//      CreditCardInterest: 0,
//      CreditCardMinimumPayment: 0,
//      CreditCardNotes: '',
//      PersonalLoanAmount: 0,
//      PersonalLoanInterest: 0,
//      PersonalLoanMinimumPayment: 0,
//      PersonalLoanNotes: '',
//      LineOfCreditAmount: 0,
//      LineOfCreditInterest: 0,
//      LineOfCreditMinimumPayment: 0,
//      LineOfCreditNotes: '',
//      OtherLoanAmount: 0,
//      OtherLoanInterest: 0,
//      OtherLoanMinimumPayment: 0,
//      OtherLoanNotes: '',
//    },
//    update: () => set((state) => ({ LiabilitiesFormData: state.LiabilitiesFormData })),
//  })

// & Assets & Liabilities
const useBoundStore = create<GrossMonthlyIncomeSlice & GrossMonthlyExpensesSlice>()((...a) => ({
  ...createGrossMonthlyIncomeSlice(...a),
  ...createGrossMonthlyExpensesSlice(...a),
  //...createAssetsSlice(...a),
  //...createLiabilitiesSlice(...a),
}))

export default useBoundStore
