import { Router } from "express";
import * as CustomerController from "./controllers/customers-controller"

const router = Router();

router.get("/customers", CustomerController.getCustomers);

export default router;
