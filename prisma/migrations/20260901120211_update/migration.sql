/*
  Warnings:

  - You are about to drop the column `consultionsFee` on the `doctors` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "consultionsFee",
ADD COLUMN     "consultionFee" DECIMAL(10,2);
