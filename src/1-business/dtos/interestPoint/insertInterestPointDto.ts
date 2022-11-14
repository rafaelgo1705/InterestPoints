import { IError } from "@business/errors/interestPoint/interestPoint";
import { OutputCreateInterestPoint } from "@business/repositories/interestPoint/interestPointRepository";

export interface InputInsertInterestPointDto {
  name: string;
  coordinateX: number;
  coordinateY: number;
}

export type OutputInsertInterestPointDto = OutputCreateInterestPoint | IError;
