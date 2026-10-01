import type { Prisma } from "@prisma/client";
import prismaClient from "../prisma";
import * as CustomerRepository from "../repositories/customers-repository";
import * as HttpResponse from "../utils/http-helper";

export const getCustomersService = async () => {
  const result = await CustomerRepository.findAllCustomers();

  return result;
};

export const getCustomerByIdService = async (id: string) => {
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return HttpResponse.badRequest(HttpResponse.Messages.INVALID_ID);
  }

  const data = await CustomerRepository.findCustomerById(id);

  if (!data) {
    return HttpResponse.notFound(HttpResponse.Messages.CUSTOMER_NOT_FOUND);
  }

  return HttpResponse.ok(data);
};

export const createCustomer = async (customer: Prisma.CustomerCreateInput) => {
  if (!customer.name || !customer.email) {
    return HttpResponse.badRequest(HttpResponse.Messages.INVALID_CUSTOMER);
  }

  if (!customer.status) {
    customer.status = true;
  }
  const result = await CustomerRepository.insertCustomer(customer);

  return result;
};

export const updateEmailByIdService = async (id: string, email: string) => {
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return HttpResponse.badRequest(HttpResponse.Messages.INVALID_ID);
  }
  
  if (!email) {
    return HttpResponse.badRequest(HttpResponse.Messages.INVALID_EMAIL)
  }

  await CustomerRepository.updateEmailByid(id, email);

  return HttpResponse.ok(HttpResponse.Messages.CUSTOMER_UPDATED);
};
