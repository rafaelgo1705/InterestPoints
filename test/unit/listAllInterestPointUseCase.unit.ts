import { interestPointRepositoryMock } from "@test/utility/mocks/interestPointRepository";
import { fakeListAllInterestPoint } from "@test/utility/fakes/fakeInterestPoint";
import { OutputListAllInterestPoint } from "@business/repositories/interestPoint/interestPointRepository";
import { ListAllInterestPointUseCase } from "@business/useCases/interestPoint/listAllInterestPointUseCase";
import {
  errorOnListAllInterestPoint,
  IError,
} from "@business/errors/interestPoint/interestPoint";

describe("1-business.useCases.interestPoints.listAllInterestPointUseCase", () => {
  test("shold be able to list all interest points", async () => {
    const listAllInterestPoint = new ListAllInterestPointUseCase();

    const result = await listAllInterestPoint.execute(
      fakeListAllInterestPoint,
      interestPointRepositoryMock
    );

    const possibleSuccess = result as OutputListAllInterestPoint;
    expect(possibleSuccess.data).toEqual(fakeListAllInterestPoint.data);
    expect(possibleSuccess.page).toEqual(fakeListAllInterestPoint.page);
    expect(possibleSuccess.perPage).toEqual(fakeListAllInterestPoint.perPage);
    expect(possibleSuccess.total).toEqual(fakeListAllInterestPoint.total);
  });

  test("shold not be able to list all interest points because error on repository", async () => {
    const listAllInterestPoint = new ListAllInterestPointUseCase();

    jest
      .spyOn(interestPointRepositoryMock, "listAllInterestPoint")
      .mockImplementationOnce(async () => {
        throw new Error();
      });

    const result = await listAllInterestPoint.execute(
      fakeListAllInterestPoint,
      interestPointRepositoryMock
    );

    const possibleErrors = result as IError;
    expect(possibleErrors.code).toEqual(errorOnListAllInterestPoint().code);
    expect(possibleErrors.message).toEqual(
      errorOnListAllInterestPoint().message
    );
  });
});
