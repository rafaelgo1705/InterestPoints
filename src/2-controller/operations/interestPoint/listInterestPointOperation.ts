import { InterestPointRepository } from "@framework/repositories/interestPoint/interestPointRepository";
import { Response, Request } from "express";
import { IError } from "@business/errors/interestPoint/interestPoint";
import { InputListInterestPointDto } from "@business/dtos/interestPoint/listInterestPointDto";
import { ListInterestPointUseCase } from "@business/useCases/interestPoint/listInterestPointUseCase";

class ListInterestPointOperation {
  async execute(req: Request, res: Response) {
    const listInterestPointUseCase = new ListInterestPointUseCase();
    const interestPointsRepository = new InterestPointRepository();

    try {
      const data: InputListInterestPointDto = {
        page: Number(req.query?.coordinateX),
        perPage: Number(req.query?.coordinateY),
      };

      const resultList = await listInterestPointUseCase.execute(
        data,
        interestPointsRepository
      );

      const possibleError = resultList as IError;
      if (possibleError.code) {
        res.status(400).send(possibleError);
      }

      return res.status(200).json(resultList);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}

export { ListInterestPointOperation };
