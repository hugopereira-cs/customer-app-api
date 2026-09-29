import type { Request, Response } from "express";
import * as Service from "../services/customers-services";
import { HttpStatus } from "../utils/http-helper";

export const getCustomers = async (req: Request, res: Response) => {
  const httpResponse = await Service.getCustomersService();

  res.status(HttpStatus.OK).json(httpResponse);
};

export const postCustomer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await Service.createCustomerById(bodyValue);

  return res.status(HttpStatus.OK).json(httpResponse)
};
