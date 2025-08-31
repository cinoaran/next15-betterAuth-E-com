import {PrismaClient} from "@/lib/generated/prisma";
import sampleProducts from "./sample-products";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();
async function seedProducts() {
  try {
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();
    await prisma.variant.deleteMany();
    await prisma.option.deleteMany();
    await prisma.category.createMany({
      data: [
        {
          id: "cm8msrowk0000i0dkfdo2t4ab",
          name: "Sportshuhe Skateboard Cupsole",
          slug: "sportshuhe-skateboard-cupsole",
        },
        {
          id: "cm8msrowk0000i0dkfdo2t4bc",
          name: "Herren Freizeit Jacke",
          slug: "herren-freizeit-jacke",
        },
        {
          id: "cm8msrowk0000i0dkfdo2t4df",
          name: "Damen Freizeit",
          slug: "damen-freizeit",
        },
        {
          id: "cm8msrowk0000i0dkfdo2t4ef",
          name: "Hoodies Jungen",
          slug: "hoodies-jungen",
        },
      ],
    });
    const categoryData = await prisma.category.findMany();

    for (const product of sampleProducts) {
      const createdProduct = await prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          isActive: product.isActive,
          isFeatured: product.isFeatured,
          brand: product.brand,
          category: {
            connect: {id: categoryData[0].id}, // or use another unique field, e.g. { name: product.category }
          },
          subcategory: product.subcategory,
          rating: product.rating,
          numReviews: product.numReviews,
          slug: product.slug,
          merchantId: product.merchantId,
        },
      });

      // Create product folder
      const productFolder = path.join(
        "public",
        "products",
        createdProduct.id.toString()
      );
      if (!fs.existsSync(productFolder)) {
        fs.mkdirSync(productFolder, {recursive: true});
      }

      for (const variant of product.variants) {
        const createdVariant = await prisma.variant.create({
          data: {
            size: variant.size,
            international: variant.international,
            productId: createdProduct.id,
          },
        });

        // Create variant folder
        const variantFolder = path.join(
          productFolder,
          `${createdProduct.name.toLowerCase()}-${createdVariant.id}`,
          createdVariant.size
        );
        if (!fs.existsSync(variantFolder)) {
          fs.mkdirSync(variantFolder, {recursive: true});
        }

        for (const option of variant.options) {
          const imagePath = `/products/${
            createdProduct.id
          }/${createdProduct.name.toLowerCase()}-${createdVariant.id}/${
            createdVariant.size
          }/${option.color}/`;
          await prisma.option.create({
            data: {
              color: option.color,
              entryPrice: option.entryPrice,
              sellPrice: option.sellPrice,
              quantity: option.quantity,
              sku: option.sku,
              url: imagePath,
              image: [...option.image],
              weight: option.weight,
              stockLevel: option.stockLevel,
              variantId: createdVariant.id,
            },
          });

          // Create option folder
          const optionFolder = path.join(variantFolder, option.color);
          if (!fs.existsSync(optionFolder)) {
            fs.mkdirSync(optionFolder, {recursive: true});
          }
          console.log("Sample products created");
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
}

seedProducts();
