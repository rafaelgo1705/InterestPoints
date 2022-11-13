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
