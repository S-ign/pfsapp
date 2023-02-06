/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `GrossMonthlyIncome` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "GrossMonthlyIncome_userId_key" ON "GrossMonthlyIncome"("userId");
