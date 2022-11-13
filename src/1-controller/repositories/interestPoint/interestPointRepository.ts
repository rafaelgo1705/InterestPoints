import { InterestPointsModel } from "@framework/models/interestPoint/interestPointModel";

class OutputFindInterestPoint {
  id: number;
  name: string;
  coordinateX: number;
  coordinateY: number;
  createdAt: Date;
  updatedAt: Date;

  static mapper(data: OutputFindInterestPoint): OutputFindInterestPoint {
    if (data) {
      return {
        id: data.id,
        coordinateX: data.coordinateX,
        coordinateY: data.coordinateY,
        name: data.name,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      };
    }
  }
}

interface InputCreateInterestPoint {
  name: string;
  coordinateX: number;
  coordinateY: number;
}

class OutputCreateInterestPoint extends OutputFindInterestPoint {}

export class InterestPointRepository {
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
