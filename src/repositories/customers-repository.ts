import prismaClient from "../prisma";
import type { Customer, Prisma } from "@prisma/client";

export const findAllCustomers = async () => {
  const customers = await prismaClient.customer.findMany();

  return customers;
};

export const findCustomerById = async (id: string) => {
  const result = await prismaClient.customer.findFirst({
    where: {
      id: id,
    },
  });

  return result;
};

export const insertCustomer = async (
  customerData: Prisma.CustomerCreateInput
) => {
  const customer = await prismaClient.customer.create({
    data: customerData,
  });

  return customer;
};
