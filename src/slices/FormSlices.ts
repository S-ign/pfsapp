import create, { StateCreator } from 'zustand'

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
const dateString = today.toLocaleDateString()

interface GrossMonthlyIncome {
  Salary: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateSalary: (
    Salary: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  RealEstateRentals: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateRealEstateRentals: (
    RealEstateRentals: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  Business: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateBusiness: (
    Business: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  DividendStocks: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateDividendStocks: (
    DividendStocks: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,
  
  Other: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  }
  updateOther: (
    Other: {
      Date: string,
      key: string,
      Name: string,
      Amount: string,
      Notes: string,
    }
  ) => void,
}

const createGrossMonthlyIncomeSlice: StateCreator<
  GrossMonthlyIncome & GrossMonthlyExpenses & Assets & Liabilities,
  [],
  [],
  GrossMonthlyIncome
  > = (set) => ({

    Salary: {
      key: 'GrossMonthlyIncomeSalary',
      Name: 'Salary',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateSalary: (Salary) => set(() => ({Salary: Salary})),

    RealEstateRentals: {
      key: 'GrossMonthlyIncomeRealEstateRentals',
      Name: 'Real Estate Rentals',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateRealEstateRentals: (RealEstateRentals) => set(() => ({ RealEstateRentals: RealEstateRentals})),

    Business: {
      key: 'GrossMonthlyIncomeBusiness',
      Name: 'Business',
      Date: dateString,
      Amount: '',
      Notes: '',
    },

    DividendStocks: {
      key: 'GrossMonthlyIncomeDividendStocks',
      Name: 'Dividend Stocks',
      Date: dateString,
      Amount: '',
      Notes: '',
    },

    Other: {
      key: 'GrossMonthlyIncomeOther',
      Name: 'Other',
      Date: dateString,
      Amount: '',
      Notes: '',
    },

    updateBusiness: (Business) => set(() => ({ Business: Business})),
    updateDividendStocks: (DividendStocks) => set(() => ({ DividendStocks: DividendStocks})),
    updateOther: (Other) => set(() => ({ Other: Other})),
  })

interface GrossMonthlyExpenses {
  gmeMortgage: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updategmeMortgage: (
    gmeMortgage: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  Rent: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateRent: (
    Rent: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  Insurance: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateInsurance: (
    Insurance: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  PropertyTax: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updatePropertyTax: (
    PropertyTax: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  HomeMaintenance: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateHomeMaintenance: (
    HomeMaintenance: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  HomeIncidentals: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateHomeIncidentals: (
    HomeIncidentals: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  Electricity: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateElectricity: (
    Electricity: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  Water: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateWater: (
    Water: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  Garbage: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateGarbage: (
    Garbage: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  Gas: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateGas: (
    Gas: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  Internet: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateInternet: (
    Internet: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  PhonePlan: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updatePhonePlan: (
    PhonePlan: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  AutoLoan: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateAutoLoan: (
    AutoLoan: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  AutoInsurance: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateAutoInsurance: (
    AutoInsurance: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  FuelCosts: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateFuelCosts: (
    FuelCosts: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  AutoMaintenance: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateAutoMaintenance: (
    AutoMaintenance: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  Groceries: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateGroceries: (
    Groceries: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  DiningOut: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateDiningOut: (
    DiningOut: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  HealthInsurance: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateHealthInsurance: (
    HealthInsurance: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  VisionInsurance: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateVisionInsurance: (
    VisionInsurance: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  DentalInsurance: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateDentalInsurance: (
    DentalInsurance: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  ChildCare: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateChildCare: (
    ChildCare: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  ChildExpenses: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateChildExpenses: (
    ChildExpenses: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  StudentLoan: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updateStudentLoan: (
    StudentLoan: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  gmeLineOfCredit: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updategmeLineOfCredit: (
    gmeLineOfCredit: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  gmeCreditCard: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updategmeCreditCard: (
    gmeCreditCard: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  gmePersonalLoan: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updategmePersonalLoan: (
    gmePersonalLoan: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,

  gmeOther: {
    key: string,
    Name: string,
    Date: string,
    Amount: string,
    Notes: string,
  },
  updategmeOther: (
    gmeOther: {
      key: string,
      Name: string,
      Date: string,
      Amount: string,
      Notes: string,
    }
  ) => void,
}

const createGrossMonthlyExpensesSlice: StateCreator<
  GrossMonthlyIncome & GrossMonthlyExpenses & Assets & Liabilities,
  [],
  [],
  GrossMonthlyExpenses
  > = (set) => ({

    gmeMortgage: {
      key: 'GrossMonthlyExpensesMortgage',
      Name: 'Mortgage',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updategmeMortgage: (gmeMortgage) => set(() => ({gmeMortgage: gmeMortgage})),

    Rent: {
      key: 'GrossMonthlyExpensesRent',
      Name: 'Rent',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateRent: (Rent) => set(() => ({Rent: Rent})),

    Insurance: {
      key: 'GrossMonthlyExpensesInsurance',
      Name: 'Insurance',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateInsurance: (Insurance) => set(() => ({Insurance: Insurance})),

    PropertyTax: {
      key: 'GrossMonthlyExpensesPropertyTax',
      Name: 'Property Tax',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updatePropertyTax: (PropertyTax) => set(() => ({PropertyTax: PropertyTax})),

    HomeMaintenance: {
      key: 'GrossMonthlyExpensesHomeMaintenance',
      Name: 'Home Maintenance',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateHomeMaintenance: (HomeMaintenance) => set(() => ({HomeMaintenance: HomeMaintenance})),

    HomeIncidentals: {
      key: 'GrossMonthlyExpensesHomeIncidentals',
      Name: 'Home Incidentals',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateHomeIncidentals: (HomeIncidentals) => set(() => ({HomeIncidentals: HomeIncidentals})),

    Electricity: {
      key: 'GrossMonthlyExpensesElectricity',
      Name: 'Electricity',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateElectricity: (Electricity) => set(() => ({Electricity: Electricity})),

    Water: {
      key: 'GrossMonthlyExpensesWater',
      Name: 'Water',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateWater: (Water) => set(() => ({Water: Water})),

    Garbage: {
      key: 'GrossMonthlyExpensesGarbage',
      Name: 'Garbage',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateGarbage: (Garbage) => set(() => ({Garbage: Garbage})),

    Gas: {
      key: 'GrossMonthlyExpensesGas',
      Name: 'Gas',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateGas: (Gas) => set(() => ({Gas: Gas})),

    Internet: {
      key: 'GrossMonthlyExpensesInternet',
      Name: 'Internet',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateInternet: (Internet) => set(() => ({Internet: Internet})),

    PhonePlan: {
      key: 'GrossMonthlyExpensesPhonePlan',
      Name: 'Phone Plan',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updatePhonePlan: (PhonePlan) => set(() => ({PhonePlan: PhonePlan})),

    AutoLoan: {
      key: 'GrossMonthlyExpensesAutoLoan',
      Name: 'Auto Loan',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateAutoLoan: (AutoLoan) => set(() => ({AutoLoan: AutoLoan})),

    AutoInsurance: {
      key: 'GrossMonthlyExpensesAutoInsurance',
      Name: 'Auto Insurance',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateAutoInsurance: (AutoInsurance) => set(() => ({AutoInsurance: AutoInsurance})),

    FuelCosts: {
      key: 'GrossMonthlyExpensesFuelCosts',
      Name: 'Fuel Costs',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateFuelCosts: (FuelCosts) => set(() => ({FuelCosts: FuelCosts})),

    AutoMaintenance: {
      key: 'GrossMonthlyExpensesAutoMaintenance',
      Name: 'Auto Maintenance',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateAutoMaintenance: (AutoMaintenance) => set(() => ({AutoMaintenance: AutoMaintenance})),

    Groceries: {
      key: 'GrossMonthlyExpensesGroceries',
      Name: 'Groceries',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateGroceries: (Groceries) => set(() => ({Groceries: Groceries})),

    DiningOut: {
      key: 'GrossMonthlyExpensesDiningOut',
      Name: 'Dining Out',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateDiningOut: (DiningOut) => set(() => ({DiningOut: DiningOut})),

    HealthInsurance: {
      key: 'GrossMonthlyExpensesHealthInsurance',
      Name: 'Health Insurance',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateHealthInsurance: (HealthInsurance) => set(() => ({HealthInsurance: HealthInsurance})),

    VisionInsurance: {
      key: 'GrossMonthlyExpensesVisionInsurance',
      Name: 'Vision Insurance',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateVisionInsurance: (VisionInsurance) => set(() => ({VisionInsurance: VisionInsurance})),

    DentalInsurance: {
      key: 'GrossMonthlyExpensesDentalInsurance',
      Name: 'Dental Insurance',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateDentalInsurance: (DentalInsurance) => set(() => ({DentalInsurance: DentalInsurance})),

    ChildCare: {
      key: 'GrossMonthlyExpensesChildCare',
      Name: 'Child Care',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateChildCare: (ChildCare) => set(() => ({ChildCare: ChildCare})),

    ChildExpenses: {
      key: 'GrossMonthlyExpensesChildExpenses',
      Name: 'Child Expenses',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateChildExpenses: (ChildExpenses) => set(() => ({ChildExpenses: ChildExpenses})),

    StudentLoan: {
      key: 'GrossMonthlyExpensesStudentLoan',
      Name: 'Student Loan',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updateStudentLoan: (StudentLoan) => set(() => ({StudentLoan: StudentLoan})),

    gmeLineOfCredit: {
      key: 'GrossMonthlyExpensesLineOfCredit',
      Name: 'Line Of Credit',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updategmeLineOfCredit: (gmeLineOfCredit) => set(() => ({gmeLineOfCredit: gmeLineOfCredit})),

    gmeCreditCard: {
      key: 'GrossMonthlyExpensesCreditCard',
      Name: 'Credit Card',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updategmeCreditCard: (gmeCreditCard) => set(() => ({gmeCreditCard: gmeCreditCard})),

    gmePersonalLoan: {
      key: 'GrossMonthlyExpensesPersonalLoan',
      Name: 'Personal Loan',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updategmePersonalLoan: (gmePersonalLoan) => set(() => ({gmePersonalLoan: gmePersonalLoan})),

    gmeOther: {
      key: 'GrossMonthlyExpensesOther',
      Name: 'Other',
      Date: dateString,
      Amount: '',
      Notes: '',
    },
    updategmeOther: (gmeOther) => set(() => ({gmeOther: gmeOther})),

  })

interface Assets {
  MarketValueOfHomes: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updateMarketValueOfHomes: (
    MarketValueOfHomes: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  MutualFunds: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updateMutualFunds: (
    MutualFunds: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  Stocks: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updateStocks: (
    Stocks: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  Annuities: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updateAnnuities: (
    Annuities: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  Cash: {
    key: string,
    Name: string,
    ValueLifeValue: number,
    Interest: number,
    Notes: string,
  },
  updateCash: (
    Cash: {
      key: string,
      Name: string,
      ValueLifeValue: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  SavingsAccount: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updateSavingsAccount: (
    SavingsAccount: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  CheckingsAccount: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updateCheckingsAccount: (
    CheckingsAccount: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  RetirementPlans: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updateRetirementPlans: (
    RetirementPlans: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  RothRetirementPlans: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updateRothRetirementPlans: (
    RothRetirementPlans: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  Pensiosn: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updatePensiosn: (
    Pensiosn: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  CertificateOfDeposit: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updateCertificateOfDeposit: (
    CertificateOfDeposit: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,

  OtherAssets: {
    key: string,
    Name: string,
    Value: number,
    Interest: number,
    Notes: string,
  },
  updateOtherAssets: (
    OtherAssets: {
      key: string,
      Name: string,
      Value: number,
      Interest: number,
      Notes: string,
    }
  ) => void,
}

const createAssetsSlice: StateCreator<
  GrossMonthlyIncome & GrossMonthlyExpenses & Assets & Liabilities,
  [],
  [],
  Assets
  > = (set) => ({
    AssetsFormData: {
      MarketValueOfHomesValue: 0,
      MarketValueOfHomesInterest: 0,
      MarketValueOfHomesNotes: '',
      MutualFundsValue: 0,
      MutualFundsInterest: 0,
      MutualFundsNotes: '',
      StocksValue: 0,
      StocksInterest: 0,
      StocksNotes: '',
      AnnuitiesValue: 0,
      AnnuitiesInterest: 0,
      AnnuitiesNotes: '',
      CashValueLifeValue: 0,
      CashValueLifeInterest: 0,
      CashValueLifeNotes: '',
      SavingsAccountValue: 0,
      SavingsAccountInterest: 0,
      SavingsAccountNotes: '',
      CheckingsAccountValue: 0,
      CheckingsAccountInterest: 0,
      CheckingsAccountNotes: '',
      RetirementPlansValue: 0,
      RetirementPlansInterest: 0,
      RetirementPlansNotes: '',
      RothRetirementPlansValue: 0,
      RothRetirementPlansInterest: 0,
      RothRetirementPlansNotes: '',
      PensiosnValue: 0,
      PensiosnInterest: 0,
      PensiosnNotes: '',
      CertificateOfDepositValue: 0,
      CertificateOfDepositInterest: 0,
      CertificateOfDepositNotes: '',
      OtherAssetsValue: 0,
      OtherAssetsInterest: 0,
      OtherAssetsNotes: '',
    },
    update: () => set((state) => ({ AssetsFormData: state.AssetsFormData })),
  })

interface Liabilities {
  Mortgage: {
    key: string,
    Name: string,
    Amount: number,
    Interest: number,
    Payment: number,
    Notes: string,
  },
  updateMortgage: (
    Mortgage: {
      key: string,
      Name: string,
      Amount: number,
      Interest: number,
      Payment: number,
      Notes: string,
    }
  ) => void,

  CarLoan: {
    key: string,
    Name: string,
    Amount: number,
    Interest: number,
    Payment: number,
    Notes: string,
  },
  updateCarLoan: (
    CarLoan: {
      key: string,
      Name: string,
      Amount: number,
      Interest: number,
      Payment: number,
      Notes: string,
    }
  ) => void,

  CreditCard: {
    key: string,
    Name: string,
    Amount: number,
    Interest: number,
    Payment: number,
    Notes: string,
  },
  updateCreditCard: (
    CreditCard: {
      key: string,
      Name: string,
      Amount: number,
      Interest: number,
      Payment: number,
      Notes: string,
    }
  ) => void,

  PersonalLoan: {
    key: string,
    Name: string,
    Amount: number,
    Interest: number,
    Payment: number,
    Notes: string,
  },
  updatePersonalLoan: (
    PersonalLoan: {
      key: string,
      Name: string,
      Amount: number,
      Interest: number,
      Payment: number,
      Notes: string,
    }
  ) => void,

  LineOfCredit: {
    key: string,
    Name: string,
    Amount: number,
    Interest: number,
    Payment: number,
    Notes: string,
  },
  updateLineOfCredit: (
    LineOfCredit: {
      key: string,
      Name: string,
      Amount: number,
      Interest: number,
      Payment: number,
      Notes: string,
    }
  ) => void,

  OtherLoan: {
    key: string,
    Name: string,
    Amount: number,
    Interest: number,
    Payment: number,
    Notes: string,
  },
  updateOtherLoan: (
    OtherLoan: {
      key: string,
      Name: string,
      Amount: number,
      Interest: number,
      Payment: number,
      Notes: string,
    }
  ) => void,
}

const createLiabilitiesSlice: StateCreator<
  GrossMonthlyIncome & GrossMonthlyExpenses & Assets & Liabilities,
  [],
  [],
  Liabilities
  > = (set) => ({
    LiabilitiesFormData: {
      MortgageAmount: 0,
      MortgageInterest: 0,
      MortgageMinimumPayment: 0,
      MortgageNotes: '',
      CarLoanAmount: 0,
      CarLoanInterest: 0,
      CarLoanMinimumPayment: 0,
      CarLoanNotes: '',
      CreditCardAmount: 0,
      CreditCardInterest: 0,
      CreditCardMinimumPayment: 0,
      CreditCardNotes: '',
      PersonalLoanAmount: 0,
      PersonalLoanInterest: 0,
      PersonalLoanMinimumPayment: 0,
      PersonalLoanNotes: '',
      LineOfCreditAmount: 0,
      LineOfCreditInterest: 0,
      LineOfCreditMinimumPayment: 0,
      LineOfCreditNotes: '',
      OtherLoanAmount: 0,
      OtherLoanInterest: 0,
      OtherLoanMinimumPayment: 0,
      OtherLoanNotes: '',
    },
    update: () => set((state) => ({ LiabilitiesFormData: state.LiabilitiesFormData })),
  })

const useBoundStore = create<GrossMonthlyIncome & GrossMonthlyExpenses & Assets & Liabilities>()((...a) => ({
  ...createGrossMonthlyIncomeSlice(...a),
  ...createGrossMonthlyExpensesSlice(...a),
  ...createAssetsSlice(...a),
  ...createLiabilitiesSlice(...a),
}))

export default useBoundStore