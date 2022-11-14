import { celebrate, Joi, Segments } from "celebrate";

class ListInterestPointValidation {
  public validate() {
    return celebrate({
      [Segments.QUERY]: this.query(),
    });
  }

  private query() {
    return Joi.object().keys({
      coordinateX: Joi.number().required().empty().messages({
        "any.required": "Coordenada X é obrigatório!",
        "number.empty": "Insira a Coordenada X!",
      }),

      coordinateY: Joi.number().required().empty().messages({
        "any.required": "Coordenada Y obrigatório!",
        "number.empty": "Insira a Coordenada Y!",
      }),
    });
  }
}

export { ListInterestPointValidation };
