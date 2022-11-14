import { ListAllInterestPointOperation } from "@controller/operations/interestPoint/listAllInterestPointOperation";
import { ListAllInterestPointValidation } from "@controller/validations/interestPoint/listAllInterestPointValidation";
import { Router } from "express";
import { InsertInterestPointOperation } from "src/2-controller/operations/interestPoint/insertInterestPointOperation";
import { InsertInterestPointValidation } from "src/2-controller/validations/interestPoint/insertInterestPointValidation";

const insertInterestPointOperation = new InsertInterestPointOperation();
const insertInterestPointValidation = new InsertInterestPointValidation();

const listAllInterestPointOperation = new ListAllInterestPointOperation();
const listAllInterestPointValidation = new ListAllInterestPointValidation();

const routes = Router();

routes.post(
  "/interestPoint",
  insertInterestPointValidation.validate(),
  insertInterestPointOperation.execute
);

routes.get(
  "/interestPoint",
  listAllInterestPointValidation.validate(),
  listAllInterestPointOperation.execute
);

export { routes };
