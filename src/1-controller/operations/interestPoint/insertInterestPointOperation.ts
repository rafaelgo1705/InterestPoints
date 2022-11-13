import { InterestPointRepository } from "@controller/repositories/interestPoint/interestPointRepository";
import { Response, Request } from "express";

class InsertInterestPointOperation {
  async store(req: Request, res: Response) {
    const interestPointsRepository = new InterestPointRepository();

    try {
      const data = req.body;

      const resultCreate = await interestPointsRepository.createInterestPoint(
        data
      );

      return res.json(resultCreate);
    } catch (error: any) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  }
}

export { InsertInterestPointOperation };
