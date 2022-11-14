import { IError } from "@business/errors/interestPoint/interestPoint";
import { OutputListInterestPoint } from "@business/repositories/interestPoint/interestPointRepository";

export interface InputListInterestPointDto {
  coordinateX: number;
  coordinateY: number;
  dMax: number;
}

export type OutputListInterestPointDto = OutputListInterestPoint | IError;
