import { IInterestPointRepository } from "@business/repositories/interestPoint/interestPointRepository";
import { fakeInsertInterestPoint } from "../fakes/fakeInterestPoint";

export const interestPointRepositoryMock: IInterestPointRepository = {
  createInterestPoint: jest.fn().mockResolvedValue(fakeInsertInterestPoint),
};
