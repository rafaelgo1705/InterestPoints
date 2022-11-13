import { InputInsertInterestPointDto } from "@business/dtos/interestPoint/insertInterestPointDto";
import { InsertInterestPointUseCase } from "@business/useCases/interestPoint/insertInterestPointUseCase";
import { Response, Request } from "express";

class InsertInterestPointOperation {
  async execute(req: Request, res: Response) {
    const insertInterestPointUseCase = new InsertInterestPointUseCase();

    try {
      const data: InputInsertInterestPointDto = req.body;

      const resultCreate = await insertInterestPointUseCase.execute(data);

      return res.status(200).json(resultCreate);
    } catch (error: any) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  }
}

export { InsertInterestPointOperation };
