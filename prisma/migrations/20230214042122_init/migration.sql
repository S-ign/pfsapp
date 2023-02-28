/*
  Warnings:

  - You are about to drop the column `name` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `DividendStock` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `GMIOther` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `RealEstateRental` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Business" DROP COLUMN "name",
ALTER COLUMN "received" SET DATA TYPE TEXT,
ALTER COLUMN "notes" DROP NOT NULL,
ALTER COLUMN "amount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "DividendStock" DROP COLUMN "name",
ALTER COLUMN "received" SET DATA TYPE TEXT,
ALTER COLUMN "notes" DROP NOT NULL,
ALTER COLUMN "amount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "GMIOther" DROP COLUMN "name",
ALTER COLUMN "received" SET DATA TYPE TEXT,
ALTER COLUMN "notes" DROP NOT NULL,
ALTER COLUMN "amount" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RealEstateRental" DROP COLUMN "name",
ALTER COLUMN "received" SET DATA TYPE TEXT,
ALTER COLUMN "notes" DROP NOT NULL,
ALTER COLUMN "amount" DROP NOT NULL;
