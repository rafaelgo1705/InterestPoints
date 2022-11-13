import { InputInsertInterestPointDto } from "@business/dtos/interestPoint/insertInterestPointDto";
import { InsertInterestPointUseCase } from "@business/useCases/interestPoint/insertInterestPointUseCase";
import { InterestPointRepository } from "@framework/repositories/interestPoint/interestPointRepository";
import { Response, Request } from "express";
import { IError } from "@business/errors/interestPoint/interestPoint";
import { OutputCreateInterestPoint } from "@business/repositories/interestPoint/interestPointRepository";

class InsertInterestPointOperation {
  async execute(req: Request, res: Response) {
    const insertInterestPointUseCase = new InsertInterestPointUseCase();
    const interestPointsRepository = new InterestPointRepository();

    try {
      const data: InputInsertInterestPointDto = req.body;

      const resultCreate = await insertInterestPointUseCase.execute(
        data,
        interestPointsRepository
      );

      const possibleError = resultCreate as IError;
      if (possibleError.code) {
        res.status(400).send(possibleError);
      }

      return res.status(200).json(resultCreate);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  }
}

export { InsertInterestPointOperation };
