import prismaClient from "../prisma";
import type { Prisma } from "@prisma/client";

export const insertCustomer = async (
  customerData: Prisma.CustomerCreateInput
) => {
  const customer = await prismaClient.customer.create({
    data: customerData,
  });

  return customer;
};
