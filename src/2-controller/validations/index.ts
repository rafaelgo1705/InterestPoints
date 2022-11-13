import { Response } from "express";

class Validations {
  public formatValidate(error: any, res: Response) {
    if (error?.details?.get("body")?.details[0]) {
      return res.status(400).json({
        message: error?.details?.get("body")?.details[0]?.message,
        field: error?.details?.get("body")?.details[0]?.path[0],
        validation: error?.details?.get("body")?.details[0]?.type,
      });
    }

    return res.status(500).json({ message: "Erro de validação!" });
  }
}

export { Validations };
