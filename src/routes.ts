import { Router } from "express";
import { InsertInterestPointOperation } from "@controller/operations/interestPoint/insertInterestPointOperation";
import { InsertInterestPointValidation } from "@controller/validations/interestPoint/insertInterestPointValidation";

const insertInterestPointOperation = new InsertInterestPointOperation();
const insertInterestPointValidation = new InsertInterestPointValidation();

const routes = Router();

routes.post(
  "/interestPoint",
  insertInterestPointValidation.validate(),
  insertInterestPointOperation.store
);

export { routes };
