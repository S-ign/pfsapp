/*
  Warnings:

  - You are about to drop the column `amount` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `received` on the `Business` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `DividendStock` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `DividendStock` table. All the data in the column will be lost.
  - You are about to drop the column `received` on the `DividendStock` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `GMIOther` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `GMIOther` table. All the data in the column will be lost.
  - You are about to drop the column `received` on the `GMIOther` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `RealEstateRental` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `RealEstateRental` table. All the data in the column will be lost.
  - You are about to drop the column `received` on the `RealEstateRental` table. All the data in the column will be lost.
  - You are about to drop the column `amount` on the `Salary` table. All the data in the column will be lost.
  - You are about to drop the column `notes` on the `Salary` table. All the data in the column will be lost.
  - You are about to drop the column `received` on the `Salary` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Business" DROP COLUMN "amount",
DROP COLUMN "notes",
DROP COLUMN "received",
ADD COLUMN     "Amount" TEXT,
ADD COLUMN     "Date" TEXT,
ADD COLUMN     "Notes" TEXT;

-- AlterTable
ALTER TABLE "DividendStock" DROP COLUMN "amount",
DROP COLUMN "notes",
DROP COLUMN "received",
ADD COLUMN     "Amount" TEXT,
ADD COLUMN     "Date" TEXT,
ADD COLUMN     "Notes" TEXT;

-- AlterTable
ALTER TABLE "GMIOther" DROP COLUMN "amount",
DROP COLUMN "notes",
DROP COLUMN "received",
ADD COLUMN     "Amount" TEXT,
ADD COLUMN     "Date" TEXT,
ADD COLUMN     "Notes" TEXT;

-- AlterTable
ALTER TABLE "RealEstateRental" DROP COLUMN "amount",
DROP COLUMN "notes",
DROP COLUMN "received",
ADD COLUMN     "Amount" TEXT,
ADD COLUMN     "Date" TEXT,
ADD COLUMN     "Notes" TEXT;

-- AlterTable
ALTER TABLE "Salary" DROP COLUMN "amount",
DROP COLUMN "notes",
DROP COLUMN "received",
ADD COLUMN     "Amount" TEXT,
ADD COLUMN     "Date" TEXT,
ADD COLUMN     "Notes" TEXT;
