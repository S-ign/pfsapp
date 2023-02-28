/*
  Warnings:

  - You are about to drop the column `name` on the `Salary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Salary" DROP COLUMN "name",
ALTER COLUMN "received" DROP NOT NULL,
ALTER COLUMN "notes" DROP NOT NULL,
ALTER COLUMN "amount" DROP NOT NULL;
