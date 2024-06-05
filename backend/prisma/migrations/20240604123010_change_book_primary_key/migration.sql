/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `bookId` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `bookIsbn` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `OrderItem` DROP FOREIGN KEY `OrderItem_bookId_fkey`;

-- AlterTable
ALTER TABLE `Book` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`isbn`);

-- AlterTable
ALTER TABLE `OrderItem` DROP COLUMN `bookId`,
    ADD COLUMN `bookIsbn` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `OrderItem` ADD CONSTRAINT `OrderItem_bookIsbn_fkey` FOREIGN KEY (`bookIsbn`) REFERENCES `Book`(`isbn`) ON DELETE RESTRICT ON UPDATE CASCADE;
