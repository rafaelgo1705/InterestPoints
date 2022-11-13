import {
  IInterestPointRepository,
  InputCreateInterestPoint,
  OutputCreateInterestPoint,
} from "@business/repositories/interestPoint/interestPointRepository";
import { InterestPointsModel } from "@framework/models/interestPoint/interestPointModel";

export class InterestPointRepository implements IInterestPointRepository {
  async createInterestPoint(
    data: InputCreateInterestPoint
  ): Promise<OutputCreateInterestPoint> {
    const create = await InterestPointsModel.create(
      { ...data },
      { returning: true }
    );

    const resultCreate = create.toJSON() as OutputCreateInterestPoint;

    return OutputCreateInterestPoint.mapper(resultCreate);
  }
}
