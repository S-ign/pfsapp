/*
  Warnings:

  - Made the column `received` on table `Salary` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Salary" ALTER COLUMN "received" SET NOT NULL,
ALTER COLUMN "received" SET DATA TYPE TEXT;
