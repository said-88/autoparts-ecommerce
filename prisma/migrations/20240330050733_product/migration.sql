-- DropIndex
DROP INDEX "Product_brand_idx";

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "compatibleCarModels" SET DEFAULT ARRAY[]::TEXT[];
