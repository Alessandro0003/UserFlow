/*
  Warnings:

  - Added the required column `author_id` to the `Description` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Description" ADD COLUMN     "author_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Description" ADD CONSTRAINT "Description_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
