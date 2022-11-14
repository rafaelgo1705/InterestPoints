import { celebrate, Joi, Segments } from "celebrate";

class ListAllInterestPointValidation {
  public validate() {
    return celebrate({
      [Segments.BODY]: this.body(),
    });
  }

  private body() {
    return Joi.object().keys({
      page: Joi.number().optional().messages({
        "number.type": "O atributo page deve ser do tipo numérico!",
      }),

      perPage: Joi.number().optional().messages({
        "number.type": "O atributo perPage deve ser do tipo numérico!",
      }),
    });
  }
}

export { ListAllInterestPointValidation };
