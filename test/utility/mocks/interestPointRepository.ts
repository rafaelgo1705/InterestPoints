import { IInterestPointRepository } from "@business/repositories/interestPoint/interestPointRepository";
import {
  fakeInsertInterestPoint,
  fakeListAllInterestPoint,
  fakeListInterestPoint,
} from "../fakes/fakeInterestPoint";

export const interestPointRepositoryMock: IInterestPointRepository = {
  createInterestPoint: jest.fn().mockResolvedValue(fakeInsertInterestPoint),
  listAllInterestPoint: jest.fn().mockResolvedValue(fakeListAllInterestPoint),
  listInterestPoint: jest.fn().mockResolvedValue(fakeListInterestPoint),
};
