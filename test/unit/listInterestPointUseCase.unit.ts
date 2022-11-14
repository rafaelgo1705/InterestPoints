import { interestPointRepositoryMock } from "@test/utility/mocks/interestPointRepository";
import { fakeListInterestPoint } from "@test/utility/fakes/fakeInterestPoint";
import {
  errorOnListInterestPoint,
  IError,
} from "@business/errors/interestPoint/interestPoint";
import { ListInterestPointUseCase } from "@business/useCases/interestPoint/listInterestPointUseCase";
import { OutputListInterestPoint } from "@business/repositories/interestPoint/interestPointRepository";

describe("1-business.useCases.interestPoints.listInterestPointUseCase", () => {
  test("shold be able to list interest points by coordinate", async () => {
    const listInterestPoint = new ListInterestPointUseCase();

    const result = await listInterestPoint.execute(
      { coordinateX: 1, coordinateY: 10 },
      interestPointRepositoryMock
    );

    const possibleSuccess = result as OutputListInterestPoint;
    expect(possibleSuccess.data).toEqual(fakeListInterestPoint.data);
    expect(possibleSuccess.total).toEqual(fakeListInterestPoint.total);
  });

  test("shold not be able to list interest points by coordinate because error on repository", async () => {
    const listInterestPoint = new ListInterestPointUseCase();

    jest
      .spyOn(interestPointRepositoryMock, "listInterestPoint")
      .mockImplementationOnce(async () => {
        throw new Error();
      });

    const result = await listInterestPoint.execute(
      { coordinateX: 1, coordinateY: 10 },
      interestPointRepositoryMock
    );

    const possibleErrors = result as IError;
    expect(possibleErrors.code).toEqual(errorOnListInterestPoint().code);
    expect(possibleErrors.message).toEqual(errorOnListInterestPoint().message);
  });
});
