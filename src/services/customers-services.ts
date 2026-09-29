import type { Prisma } from "@prisma/client";
import prismaClient from "../prisma";
import * as CustomerRepository from "../repositories/customers-repository";
import * as HttpResponse from "../utils/http-helper";

export const getCustomersService = async () => {
  return { customer: "customer2" };
};

export const createCustomerById = async (
  customer: Prisma.CustomerCreateInput
) => {
  if (!customer.name || !customer.email) {
    return HttpResponse.badRequest(HttpResponse.Messages.INVALID_CUSTOMER);
  }
  const result = await CustomerRepository.insertCustomer(customer);

  return result;
};
