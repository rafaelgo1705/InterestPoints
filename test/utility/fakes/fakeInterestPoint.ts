import {
  OutputCreateInterestPoint,
  OutputListAllInterestPoint,
  OutputListInterestPoint,
} from "@business/repositories/interestPoint/interestPointRepository";

export const fakeInsertInterestPoint: OutputCreateInterestPoint = {
  id: 1,
  coordinateX: 1,
  coordinateY: 1,
  name: "Restaurante",
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const fakeListAllInterestPoint: OutputListAllInterestPoint = {
  page: 1,
  perPage: 10,
  total: 1,
  data: [
    {
      id: 1,
      coordinateX: 1,
      coordinateY: 1,
      name: "Restaurante",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};

export const fakeListInterestPoint: OutputListInterestPoint = {
  total: fakeListAllInterestPoint.total,
  data: fakeListAllInterestPoint.data,
};
