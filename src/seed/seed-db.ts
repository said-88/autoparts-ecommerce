import { initialData } from "./seed";
import { prisma } from "../lib/prisma";
import { countries } from "./seed-countries";

const main = async () => {
  await prisma.orderAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  
  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();
  await prisma.country.deleteMany();

  // await Promise.all([
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  // ]);

  const { categories, products, users } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  await prisma.country.createMany({
    data: countries,
  });

  const categoriesData = categories.map((category) => ({ name: category }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); // <string=categoryName, string=categoryId>
  console.log(categoriesMap);

  // Products
  products.forEach(async (product) => {
    const { category, images, ...productData } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...productData,
        categoryId: categoriesMap[category],
      },
    });

    // Images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });
};

//
(() => {
  if (process.env.NODE_ENV === "production") return;
  main();

  console.log("Seed it´s done!");
})();
