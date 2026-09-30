import prismaClient from "../prisma";
import type { Prisma } from "@prisma/client";

export const findAllCustomers = async () => {
  const customers = await prismaClient.customer.findMany();

  return customers;
}

export const insertCustomer = async (
  customerData: Prisma.CustomerCreateInput
) => {
  const customer = await prismaClient.customer.create({
    data: customerData,
  });

  return customer;
};
