export type ItemData = {
  key: string,
  Name: string,
  Date: string,
  Amount: string,
  Notes: string,
}

export type GrossMonthlyIncomeType = {
  Salary: ItemData,
  RealEstateRentals: ItemData,
  Business: ItemData,
  DividendStocks: ItemData,
  Other: ItemData,
}

export type GrossMonthlyExpensesType = {
  Mortgage: ItemData,
  Rent: ItemData,
  Insurance: ItemData,
  PropertyTax: ItemData,
  HomeMaintenance: ItemData,
  HomeIncidentals: ItemData,
  Electricity: ItemData,
  Water: ItemData,
  Garbage: ItemData,
  Gas: ItemData,
  Internet: ItemData,
  PhonePlan: ItemData,
  AutoLoan: ItemData,
  AutoInsurance: ItemData,
  FuelCosts: ItemData,
  AutoMaintenance: ItemData,
  Groceries: ItemData,
  DiningOut: ItemData,
  HealthInsurance: ItemData,
  VisionInsurance: ItemData,
  DentalInsurance: ItemData,
  ChildCare: ItemData,
  ChildExpenses: ItemData,
  StudentLoan: ItemData,
  LineOfCredit: ItemData,
  CreditCard: ItemData,
  PersonalLoan: ItemData,
  Other: ItemData,
}

