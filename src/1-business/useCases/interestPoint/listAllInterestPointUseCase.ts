import {
  InputListAllInterestPointDto,
  OutputListAllInterestPointDto,
} from "@business/dtos/interestPoint/listAllInterestPointDto";
import { errorOnListAllInterestPoint } from "@business/errors/interestPoint/interestPoint";
import { InterestPointRepository } from "@framework/repositories/interestPoint/interestPointRepository";

export class ListAllInterestPointUseCase {
  async execute(
    input: InputListAllInterestPointDto,
    interestPointsRepository: InterestPointRepository
  ): Promise<OutputListAllInterestPointDto> {
    try {
      const resultCreate = await interestPointsRepository.listAllInterestPoint(
        input
      );

      return resultCreate;
    } catch (error) {
      console.log(error);
      return errorOnListAllInterestPoint(error.message);
    }
  }
}
