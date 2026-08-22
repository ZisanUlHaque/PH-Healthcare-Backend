/*
  Warnings:

  - You are about to drop the column `bkashPaymentID` on the `payments` table. All the data in the column will be lost.
  - You are about to drop the column `bkashTrxID` on the `payments` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bkashPaymentId]` on the table `payments` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "payments_bkashPaymentID_key";

-- AlterTable
ALTER TABLE "payments" DROP COLUMN "bkashPaymentID",
DROP COLUMN "bkashTrxID",
ADD COLUMN     "bkashPaymentId" TEXT,
ADD COLUMN     "bkashTrxId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "payments_bkashPaymentId_key" ON "payments"("bkashPaymentId");
