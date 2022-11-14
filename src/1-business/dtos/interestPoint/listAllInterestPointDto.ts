import { IError } from "@business/errors/interestPoint/interestPoint";
import { OutputListAllInterestPoint } from "@business/repositories/interestPoint/interestPointRepository";

export interface InputListAllInterestPointDto {
  page: number;
  perPage: number;
}

export type OutputListAllInterestPointDto = OutputListAllInterestPoint | IError;
