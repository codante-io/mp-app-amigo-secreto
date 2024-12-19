"use server";

import {
  FormFieldsValidationException,
  validateFormFields,
} from "@/helpers/form-validation";
import { SIGNIN_FORM_SCHEMA } from "./signin-form.schema";
import { SigninFormData, SigninFormValidations } from "./signin-form.types";

export async function signinUser(
  _prevState: SigninFormValidations,
  formData: FormData,
): Promise<SigninFormValidations> {
  const formDataEmail = formData.get("email") as string;

  try {
    const { email } = validateFormFields<SigninFormData, SigninFormValidations>(
      formData,
      SIGNIN_FORM_SCHEMA,
    );

    console.log("login realizado com sucesso", email);

    return {
      ok: true,
      message: "Login efetuado com sucesso",
    };
  } catch (error: unknown) {
    if (error instanceof FormFieldsValidationException) {
      return {
        fieldErrors: error.errors,
        data: {
          email: formDataEmail,
        },
      };
    }

    return {
      ok: false,
      message:
        "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
      data: {
        email: formDataEmail,
      },
    };
  }
}
