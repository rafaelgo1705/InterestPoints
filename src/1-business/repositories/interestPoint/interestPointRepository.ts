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

export interface InputListAllInterestPoint {
  page?: number;
  perPage?: number;
}

export class OutputListAllInterestPoint {
  page: number;
  perPage: number;
  total: number;
  data: OutputCreateInterestPoint[];

  static mapper(data: OutputListAllInterestPoint): OutputListAllInterestPoint {
    const dataFormated: OutputCreateInterestPoint[] = [];

    data?.data?.map((interestPoint) => {
      dataFormated.push(interestPoint);
    });

    return {
      page: data.page,
      perPage: data.perPage,
      total: data.total,
      data: dataFormated,
    };
  }
}

export interface IInterestPointRepository {
  createInterestPoint(
    data: InputCreateInterestPoint
  ): Promise<OutputCreateInterestPoint>;
  listAllInterestPoint(
    data: InputListAllInterestPoint
  ): Promise<OutputListAllInterestPoint>;
}
