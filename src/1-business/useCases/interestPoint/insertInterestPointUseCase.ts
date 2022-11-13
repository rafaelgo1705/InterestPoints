import {
  InputInsertInterestPointDto,
  OutputInsertInterestPointDto,
} from "@business/dtos/interestPoint/insertInterestPointDto";
import { InterestPointRepository } from "@business/repositories/interestPoint/interestPointRepository";

export class InsertInterestPointUseCase {
  async execute(
    input: InputInsertInterestPointDto
  ): Promise<OutputInsertInterestPointDto> {
    const interestPointsRepository = new InterestPointRepository();

    try {
      const resultCreate = await interestPointsRepository.createInterestPoint(
        input
      );

      return resultCreate;
    } catch (error) {
      throw new Error(error);
    }
  }
}
