-- CreateTable
CREATE TABLE "Example" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Salary" (
    "id" TEXT NOT NULL,
    "received" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmiId" TEXT NOT NULL,

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RealEstateRental" (
    "id" TEXT NOT NULL,
    "received" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmiId" TEXT NOT NULL,

    CONSTRAINT "RealEstateRental_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" TEXT NOT NULL,
    "received" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmiId" TEXT NOT NULL,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DividendStock" (
    "id" TEXT NOT NULL,
    "received" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmiId" TEXT NOT NULL,

    CONSTRAINT "DividendStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GMIOther" (
    "id" TEXT NOT NULL,
    "received" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmiId" TEXT NOT NULL,

    CONSTRAINT "GMIOther_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrossMonthlyIncome" (
    "id" TEXT NOT NULL,

    CONSTRAINT "GrossMonthlyIncome_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mortgage" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyID" TEXT NOT NULL,

    CONSTRAINT "Mortgage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rent" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyID" TEXT NOT NULL,

    CONSTRAINT "Rent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Insurance" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyID" TEXT NOT NULL,

    CONSTRAINT "Insurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PropertyTax" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyID" TEXT NOT NULL,

    CONSTRAINT "PropertyTax_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomeMaintenance" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyID" TEXT NOT NULL,

    CONSTRAINT "HomeMaintenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HomeIncidentals" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyID" TEXT NOT NULL,

    CONSTRAINT "HomeIncidentals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Electricity" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "provider" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "Electricity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Water" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "provider" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "Water_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Garbage" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "provider" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "Garbage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gas" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "provider" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "Gas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Internet" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "provider" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "Internet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhonePlan" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "provider" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "PhonePlan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "id" TEXT NOT NULL,
    "marketValue" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutoLoan" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "provider" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "AutoLoan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutoInsurance" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "provider" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "AutoInsurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FuelCosts" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "FuelCosts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AutoMaintenance" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "provider" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "carId" TEXT NOT NULL,

    CONSTRAINT "AutoMaintenance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Groceries" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "Groceries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiningOut" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "DiningOut_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HealthInsurance" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "HealthInsurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisionInsurance" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "VisionInsurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DentalInsurance" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "DentalInsurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChildCare" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "ChildCare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChildExpenses" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "ChildExpenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentLoan" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "StudentLoan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LineOfCredit" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "LineOfCredit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CreditCard" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonalLoan" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "PersonalLoan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GMEOther" (
    "id" TEXT NOT NULL,
    "due" TIMESTAMP(3),
    "notes" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "gmeID" TEXT NOT NULL,

    CONSTRAINT "GMEOther_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GrossMonthlyExpenses" (
    "id" TEXT NOT NULL,

    CONSTRAINT "GrossMonthlyExpenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MutualFund" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "MutualFund_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Annuity" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "Annuity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CashValueLifeInsurance" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "CashValueLifeInsurance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavingsAccount" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "SavingsAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CheckingsAccount" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "CheckingsAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Retirement" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "Retirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roth" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "Roth_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pension" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "Pension_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CertificateOfDeposit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "CertificateOfDeposit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OtherAsset" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "intrest" TEXT NOT NULL,
    "dividends" TEXT NOT NULL,
    "assetID" TEXT NOT NULL,

    CONSTRAINT "OtherAsset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assets" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Assets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Rent_propertyID_key" ON "Rent"("propertyID");

-- CreateIndex
CREATE UNIQUE INDEX "PropertyTax_propertyID_key" ON "PropertyTax"("propertyID");

-- CreateIndex
CREATE UNIQUE INDEX "Electricity_propertyId_key" ON "Electricity"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Water_propertyId_key" ON "Water"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Garbage_propertyId_key" ON "Garbage"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Gas_propertyId_key" ON "Gas"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Internet_propertyId_key" ON "Internet"("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "FuelCosts_carId_key" ON "FuelCosts"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "Groceries_gmeID_key" ON "Groceries"("gmeID");

-- CreateIndex
CREATE UNIQUE INDEX "DiningOut_gmeID_key" ON "DiningOut"("gmeID");

-- CreateIndex
CREATE UNIQUE INDEX "HealthInsurance_gmeID_key" ON "HealthInsurance"("gmeID");

-- CreateIndex
CREATE UNIQUE INDEX "VisionInsurance_gmeID_key" ON "VisionInsurance"("gmeID");

-- CreateIndex
CREATE UNIQUE INDEX "DentalInsurance_gmeID_key" ON "DentalInsurance"("gmeID");

-- CreateIndex
CREATE UNIQUE INDEX "ChildCare_gmeID_key" ON "ChildCare"("gmeID");

-- CreateIndex
CREATE UNIQUE INDEX "ChildExpenses_gmeID_key" ON "ChildExpenses"("gmeID");

-- CreateIndex
CREATE UNIQUE INDEX "StudentLoan_gmeID_key" ON "StudentLoan"("gmeID");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Salary" ADD CONSTRAINT "Salary_gmiId_fkey" FOREIGN KEY ("gmiId") REFERENCES "GrossMonthlyIncome"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RealEstateRental" ADD CONSTRAINT "RealEstateRental_gmiId_fkey" FOREIGN KEY ("gmiId") REFERENCES "GrossMonthlyIncome"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_gmiId_fkey" FOREIGN KEY ("gmiId") REFERENCES "GrossMonthlyIncome"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DividendStock" ADD CONSTRAINT "DividendStock_gmiId_fkey" FOREIGN KEY ("gmiId") REFERENCES "GrossMonthlyIncome"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GMIOther" ADD CONSTRAINT "GMIOther_gmiId_fkey" FOREIGN KEY ("gmiId") REFERENCES "GrossMonthlyIncome"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mortgage" ADD CONSTRAINT "Mortgage_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Insurance" ADD CONSTRAINT "Insurance_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertyTax" ADD CONSTRAINT "PropertyTax_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeMaintenance" ADD CONSTRAINT "HomeMaintenance_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HomeIncidentals" ADD CONSTRAINT "HomeIncidentals_propertyID_fkey" FOREIGN KEY ("propertyID") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Electricity" ADD CONSTRAINT "Electricity_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Water" ADD CONSTRAINT "Water_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Garbage" ADD CONSTRAINT "Garbage_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gas" ADD CONSTRAINT "Gas_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Internet" ADD CONSTRAINT "Internet_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhonePlan" ADD CONSTRAINT "PhonePlan_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutoLoan" ADD CONSTRAINT "AutoLoan_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutoInsurance" ADD CONSTRAINT "AutoInsurance_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FuelCosts" ADD CONSTRAINT "FuelCosts_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AutoMaintenance" ADD CONSTRAINT "AutoMaintenance_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Groceries" ADD CONSTRAINT "Groceries_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiningOut" ADD CONSTRAINT "DiningOut_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HealthInsurance" ADD CONSTRAINT "HealthInsurance_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisionInsurance" ADD CONSTRAINT "VisionInsurance_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DentalInsurance" ADD CONSTRAINT "DentalInsurance_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChildCare" ADD CONSTRAINT "ChildCare_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChildExpenses" ADD CONSTRAINT "ChildExpenses_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentLoan" ADD CONSTRAINT "StudentLoan_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineOfCredit" ADD CONSTRAINT "LineOfCredit_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PersonalLoan" ADD CONSTRAINT "PersonalLoan_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GMEOther" ADD CONSTRAINT "GMEOther_gmeID_fkey" FOREIGN KEY ("gmeID") REFERENCES "GrossMonthlyExpenses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MutualFund" ADD CONSTRAINT "MutualFund_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Annuity" ADD CONSTRAINT "Annuity_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CashValueLifeInsurance" ADD CONSTRAINT "CashValueLifeInsurance_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SavingsAccount" ADD CONSTRAINT "SavingsAccount_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckingsAccount" ADD CONSTRAINT "CheckingsAccount_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Retirement" ADD CONSTRAINT "Retirement_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Roth" ADD CONSTRAINT "Roth_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pension" ADD CONSTRAINT "Pension_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CertificateOfDeposit" ADD CONSTRAINT "CertificateOfDeposit_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OtherAsset" ADD CONSTRAINT "OtherAsset_assetID_fkey" FOREIGN KEY ("assetID") REFERENCES "Assets"("id") ON DELETE CASCADE ON UPDATE CASCADE;
