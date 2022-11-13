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

export interface InputCreateInterestPoint {
  name: string;
  coordinateX: number;
  coordinateY: number;
}

export class OutputCreateInterestPoint extends OutputFindInterestPoint {}

export interface IInterestPointRepository {
  createInterestPoint(
    data: InputCreateInterestPoint
  ): Promise<OutputCreateInterestPoint>;
}
