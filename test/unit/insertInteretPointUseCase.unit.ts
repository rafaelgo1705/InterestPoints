import { InsertInterestPointUseCase } from "@business/useCases/interestPoint/insertInterestPointUseCase";
import { fakeInsertInterestPoint } from "@test/utility/fakes/fakeInterestPoint";

describe("1-business.useCases.interestPoints", () => {
  test("shold be able to create interest point", async () => {
    const insertInterestPoint = new InsertInterestPointUseCase();

    const result = insertInterestPoint.execute(fakeInsertInterestPoint);

    console.log(result);
  });
});
