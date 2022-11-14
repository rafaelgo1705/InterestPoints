import {
  InputListInterestPointDto,
  OutputListInterestPointDto,
} from "@business/dtos/interestPoint/listInterestPointDto";
import { errorOnListInterestPoint } from "@business/errors/interestPoint/interestPoint";
import { OutputListInterestPoint } from "@business/repositories/interestPoint/interestPointRepository";
import { InterestPointRepository } from "@framework/repositories/interestPoint/interestPointRepository";

export class ListInterestPointUseCase {
  async execute(
    input: InputListInterestPointDto,
    interestPointsRepository: InterestPointRepository
  ): Promise<OutputListInterestPointDto> {
    try {
      const resultCreate = await interestPointsRepository.listInterestPoint();

      const interestPoints: OutputListInterestPoint["data"] = [];
      resultCreate.data.map((interestPoint) => {
        const distance = Math.hypot(
          interestPoint.coordinateX - input.coordinateX,
          interestPoint.coordinateY - input.coordinateY
        );

        if (Math.trunc(distance) <= input.dMax) {
          interestPoints.push(interestPoint);
        }
      });

      return { total: interestPoints.length, data: interestPoints };
    } catch (error) {
      console.log(error);
      return errorOnListInterestPoint(error.message);
    }
  }
}
