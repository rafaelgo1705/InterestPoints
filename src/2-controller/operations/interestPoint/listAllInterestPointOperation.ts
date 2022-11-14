import { InterestPointRepository } from "@framework/repositories/interestPoint/interestPointRepository";
import { Response, Request } from "express";
import { IError } from "@business/errors/interestPoint/interestPoint";
import { InputListAllInterestPointDto } from "@business/dtos/interestPoint/listAllInterestPointDto";
import { ListAllInterestPointUseCase } from "@business/useCases/interestPoint/listAllInterestPointUseCase";

class ListAllInterestPointOperation {
  async execute(req: Request, res: Response) {
    const listAllInterestPointUseCase = new ListAllInterestPointUseCase();
    const interestPointsRepository = new InterestPointRepository();

    try {
      const data: InputListAllInterestPointDto = {
        page: Number(req.query?.page || 1),
        perPage: Number(req.query?.perPage || 10),
      };

      const resultListAll = await listAllInterestPointUseCase.execute(
        data,
        interestPointsRepository
      );

      const possibleError = resultListAll as IError;
      if (possibleError.code) {
        res.status(400).send(possibleError);
      }

      return res.status(200).json(resultListAll);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}

export { ListAllInterestPointOperation };
