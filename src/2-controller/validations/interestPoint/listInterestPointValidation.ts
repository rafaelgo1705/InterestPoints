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
        "any.required": "Coordenada Y é obrigatório!",
        "number.empty": "Insira a Coordenada Y!",
      }),
      dMax: Joi.number().required().empty().messages({
        "any.required": "Distância máxima é obrigatória!",
        "number.empty": "Insira a distância máxima!",
      }),
    });
  }
}

export { ListInterestPointValidation };
