import { Router } from "express";
import * as CustomerController from "./controllers/customers-controller"

const router = Router();

router.get("/customers", CustomerController.getCustomers);
router.get("/customers/:id", CustomerController.getCustomerById);

router.post("/customers", CustomerController.postCustomer);

export default router;
