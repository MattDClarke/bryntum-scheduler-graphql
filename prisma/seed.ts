import { PrismaClient } from "@prisma/client";
import { resources, events } from "../data/scheduler-initial-data";
const prisma = new PrismaClient();

async function main() {
  // clear database first
  await prisma.resources.deleteMany({});
  await prisma.events.deleteMany({});

  for (const resource of resources) {
    await prisma.resources.create({
      data: resource,
    });
  }

  for (const event of events) {
    await prisma.events.create({
      data: event,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
