/*
  Warnings:

  - You are about to drop the column `consultionFee` on the `doctors` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "consultionFee",
ADD COLUMN     "consultationFee" DECIMAL(10,2);
