import { interestPointRepositoryMock } from "@test/utility/mocks/interestPointRepository";
import { InsertInterestPointUseCase } from "@business/useCases/interestPoint/insertInterestPointUseCase";
import { fakeInsertInterestPoint } from "@test/utility/fakes/fakeInterestPoint";
import { OutputCreateInterestPoint } from "@business/repositories/interestPoint/interestPointRepository";
import {
  errorOnCreateInterestPoint,
  IError,
} from "@business/errors/interestPoint/interestPoint";

describe("1-business.useCases.interestPoints", () => {
  test("shold be able to create interest point", async () => {
    const insertInterestPoint = new InsertInterestPointUseCase();

    const result = await insertInterestPoint.execute(
      fakeInsertInterestPoint,
      interestPointRepositoryMock
    );

    const possibleSuccess = result as OutputCreateInterestPoint;
    expect(possibleSuccess.coordinateX).toEqual(
      fakeInsertInterestPoint.coordinateX
    );
    expect(possibleSuccess.coordinateY).toEqual(
      fakeInsertInterestPoint.coordinateY
    );
    expect(possibleSuccess.name).toEqual(fakeInsertInterestPoint.name);
  });

  test("shold not be able to create interest point because exception in repository", async () => {
    const insertInterestPoint = new InsertInterestPointUseCase();

    jest
      .spyOn(interestPointRepositoryMock, "createInterestPoint")
      .mockImplementationOnce(async () => {
        throw new Error();
      });

    const result = await insertInterestPoint.execute(
      fakeInsertInterestPoint,
      interestPointRepositoryMock
    );

    const possibleError = result as IError;
    expect(possibleError.code).toEqual(errorOnCreateInterestPoint().code);
    expect(possibleError.message).toEqual(errorOnCreateInterestPoint().message);
  });
});
