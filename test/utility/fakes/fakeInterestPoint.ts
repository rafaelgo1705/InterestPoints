import { InputInsertInterestPointDto } from "@business/dtos/interestPoint/insertInterestPointDto";
import { OutputCreateInterestPoint } from "@business/repositories/interestPoint/interestPointRepository";

export const fakeInsertInterestPoint: OutputCreateInterestPoint = {
  id: 1,
  coordinateX: 1,
  coordinateY: 1,
  name: "Restaurante",
  createdAt: new Date(),
  updatedAt: new Date(),
};
