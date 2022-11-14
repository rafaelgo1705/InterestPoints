export interface IError {
  code: string;
  message: string;
  details?: string;
}

export const errorOnCreateInterestPoint = (details?: string): IError => ({
  code: "001",
  message: "Error On Create Interest Point",
  details,
});

export const errorOnListAllInterestPoint = (details?: string): IError => ({
  code: "002",
  message: "Error On List All Interest Point",
  details,
});

export const errorOnListInterestPoint = (details?: string): IError => ({
  code: "003",
  message: "Error On List Interest Point",
  details,
});
