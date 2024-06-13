import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy employees with realistic data for a clothing factory
  const employee1 = await prisma.employee.upsert({
    where: { id: 'd2b8f40e-5b3a-4a5c-8a6e-27b1b8e6f2e9' },
    update: {},
    create: {
      id: 'd2b8f40e-5b3a-4a5c-8a6e-27b1b8e6f2e9',
      firstName: 'Emily',
      lastName: 'Taylor',
      role: 'Pattern Maker',
      department: 'Design',
      hireDate: new Date('2019-04-10'),
      salary: 55000,
    },
  });

  const employee2 = await prisma.employee.upsert({
    where: { id: 'a6b7c8d9-e2f3-4b5c-8a6b-215c9f58f2e4' },
    update: {},
    create: {
      id: 'a6b7c8d9-e2f3-4b5c-8a6b-215c9f58f2e4',
      firstName: 'James',
      lastName: 'Brown',
      role: 'Quality Control Inspector',
      department: 'Production',
      hireDate: new Date('2020-07-15'),
      salary: 48000,
    },
  });

  console.log({ employee1, employee2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
