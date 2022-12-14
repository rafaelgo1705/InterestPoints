import { celebrate, Joi, Segments } from "celebrate";

class InsertInterestPointValidation {
  public validate() {
    return celebrate({
      [Segments.BODY]: this.body(),
    });
  }

  private body() {
    return Joi.object().keys({
      name: Joi.string().required().empty().messages({
        "any.required": "Nome é obrigatório!",
        "string.empty": "Insira o Nome!",
      }),

      coordinateX: Joi.number().positive().required().empty().messages({
        "any.required": "Coordenada X é obrigatório!",
        "number.empty": "Insira a Coordenada X!",
        "number.positive": "A coordenada X deve ser um valor positivo!",
      }),

      coordinateY: Joi.number().positive().required().empty().messages({
        "any.required": "Coordenada Y obrigatório!",
        "number.empty": "Insira a Coordenada Y!",
        "number.positive": "A coordenada Y deve ser um valor positivo!",
      }),
    });
  }
}

export { InsertInterestPointValidation };
