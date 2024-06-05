/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` DROP PRIMARY KEY,
    ADD COLUMN `id` INT AUTO_INCREMENT PRIMARY KEY;
