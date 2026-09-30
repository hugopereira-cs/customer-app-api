import type { Prisma } from "@prisma/client";
import prismaClient from "../prisma";
import * as CustomerRepository from "../repositories/customers-repository";
import * as HttpResponse from "../utils/http-helper";

export const getCustomersService = async () => {
  const result = await CustomerRepository.findAllCustomers();
  
  return result;
};

export const createCustomer = async (
  customer: Prisma.CustomerCreateInput
) => {
  if (!customer.name || !customer.email) {
    return HttpResponse.badRequest(HttpResponse.Messages.INVALID_CUSTOMER);
  }

  if (!customer.status) {
    customer.status = true;
  }
  const result = await CustomerRepository.insertCustomer(customer);

  return result;
};
