import { Router } from "express";
import * as CustomerController from "./controllers/customers-controller";

const router = Router();

router.get("/customers", CustomerController.getCustomers);
router.post("/customers", CustomerController.postCustomer);
router.get("/customers/:id", CustomerController.getCustomerById);
router.patch("/customers/:id", CustomerController.updateEmailById);
router.delete("/customers/:id", CustomerController.deleteCustomerById);

export default router;
