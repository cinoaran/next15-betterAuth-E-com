import {PrismaClient} from "@prisma/client";
import * as fs from "fs";
import * as path from "path";
import {fileURLToPath} from "url";
import {dirname} from "path";

const prisma = new PrismaClient();

await prisma.merchant.deleteMany();
await prisma.partner.deleteMany();

async function main() {
  try {
    const merchant = await prisma.merchant.create({
      data: {
        name: "Magneficent Coperation",
        address: "123 Main St, Anytown, USA",
        web: "https://www.johndoe.com",
        phone: "555-123-4567",
        email: "johndoe@example.com",
        partner: {
          create: [
            {
              name: "James Johnson",
              phone: "999-888-7777",
              email: "james@johnson.com",
              department: "Sales",
            },
          ],
        },
      },
    });

    const merchantId = merchant.id;
    const __dirname = dirname(fileURLToPath(import.meta.url));

    const publicFolder = path.join(__dirname, "../public");
    const merchantFolder = path.join(publicFolder, `merchant/${merchantId}`);

    try {
      if (!fs.existsSync(merchantFolder)) {
        fs.mkdirSync(merchantFolder, {recursive: true});
      }
    } catch (error) {
      console.error(
        `Error creating folder for merchant ${merchantId}: ${
          (error as {message: string}).message
        }`
      );
    }

    console.log(`Merchant created with ID: ${merchantId}`);
    console.log(`Folder created for merchant: ${merchantFolder}`);
  } catch (error) {
    console.error(error);
  }
}

main();
