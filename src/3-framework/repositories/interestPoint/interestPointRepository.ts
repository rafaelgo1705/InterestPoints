import {
  IInterestPointRepository,
  InputCreateInterestPoint,
  InputListAllInterestPoint,
  OutputCreateInterestPoint,
  OutputListAllInterestPoint,
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

  async listAllInterestPoint(
    data: InputListAllInterestPoint
  ): Promise<OutputListAllInterestPoint> {
    const { page, perPage } = data;

    const listAll = await InterestPointsModel.findAndCountAll({
      limit: perPage,
      offset: --data.page * perPage,
    });

    return OutputListAllInterestPoint.mapper({
      page,
      perPage,
      total: listAll.count,
      data: listAll.rows as unknown as OutputListAllInterestPoint["data"],
    });
  }
}
