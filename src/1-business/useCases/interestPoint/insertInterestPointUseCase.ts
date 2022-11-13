import {
  InputInsertInterestPointDto,
  OutputInsertInterestPointDto,
} from "@business/dtos/interestPoint/insertInterestPointDto";
import { errorOnCreateInterestPoint } from "@business/errors/interestPoint/interestPoint";
import { InterestPointRepository } from "@framework/repositories/interestPoint/interestPointRepository";

export class InsertInterestPointUseCase {
  async execute(
    input: InputInsertInterestPointDto,
    interestPointsRepository: InterestPointRepository
  ): Promise<OutputInsertInterestPointDto> {
    try {
      const resultCreate = await interestPointsRepository.createInterestPoint(
        input
      );

      return resultCreate;
    } catch (error) {
      console.log(error);
      return errorOnCreateInterestPoint(error.message);
    }
  }
}
