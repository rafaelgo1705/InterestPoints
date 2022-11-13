import { Router } from "express";
import { InsertInterestPointOperation } from "src/2-controller/operations/interestPoint/insertInterestPointOperation";
import { InsertInterestPointValidation } from "src/2-controller/validations/interestPoint/insertInterestPointValidation";

const insertInterestPointOperation = new InsertInterestPointOperation();
const insertInterestPointValidation = new InsertInterestPointValidation();

const routes = Router();

routes.post(
  "/interestPoint",
  insertInterestPointValidation.validate(),
  insertInterestPointOperation.execute
);

export { routes };
