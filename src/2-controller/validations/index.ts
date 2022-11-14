import { Response } from "express";

class Validations {
  public formatValidate(error: any, res: Response) {
    const body = error?.details?.get("body");
    const query = error?.details?.get("query");

    if (body || query) {
      const validationDetails = body || query;

      return res.status(400).json({
        message: validationDetails?.details[0]?.message,
        field: validationDetails?.details[0]?.path[0],
        validation: validationDetails?.details[0]?.type,
      });
    }

    return res.status(500).json({ message: "Erro de validação!" });
  }
}

export { Validations };
