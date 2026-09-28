import type { Request, Response } from "express";
import * as Service from "../services/customers-services";

export const getCustomers = async (req: Request, res: Response) => {
  const httpResponse = await Service.getCustomersService();

  res.status(200).json(httpResponse);
};
