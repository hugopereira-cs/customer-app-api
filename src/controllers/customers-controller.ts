import type { Request, Response } from "express";
import * as Service from "../services/customers-services";
import { HttpStatus } from "../utils/http-helper";

export const getCustomers = async (req: Request, res: Response) => {
  const httpResponse = await Service.getCustomersService();

  res.status(HttpStatus.OK).json(httpResponse);
};

export const getCustomerById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = req.params.id;
  const httpResponse = await Service.getCustomerByIdService(id);

  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postCustomer = async (req: Request, res: Response) => {
  const bodyValue = req.body;
  const httpResponse = await Service.createCustomer(bodyValue);

  return res.status(HttpStatus.OK).json(httpResponse);
};

export const updateEmailById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const id = req.params.id;
  const newEmail: string = req.body.email;
  const HttpStatus = await Service.updateEmailByIdService(id, newEmail);

  res.status(HttpStatus.statusCode).json(HttpStatus.body);
};
