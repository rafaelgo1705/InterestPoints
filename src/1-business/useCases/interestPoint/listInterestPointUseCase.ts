import {
  InputListInterestPointDto,
  OutputListInterestPointDto,
} from "@business/dtos/interestPoint/listInterestPointDto";
import { errorOnListInterestPoint } from "@business/errors/interestPoint/interestPoint";
import { InterestPointRepository } from "@framework/repositories/interestPoint/interestPointRepository";

export class ListInterestPointUseCase {
  async execute(
    input: InputListInterestPointDto,
    interestPointsRepository: InterestPointRepository
  ): Promise<OutputListInterestPointDto> {
    try {
      const resultCreate = await interestPointsRepository.listInterestPoint(
        input
      );

      return resultCreate;
    } catch (error) {
      console.log(error);
      return errorOnListInterestPoint(error.message);
    }
  }
}
