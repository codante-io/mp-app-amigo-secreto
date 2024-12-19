"use server";

import {
  FormFieldsValidationException,
  validateFormFields,
} from "@/helpers/form-validation";
import { createClient } from "@/utils/supabase/server";
import { SIGNIN_FORM_SCHEMA } from "./signin-form.schema";
import { SigninFormData, SigninFormValidations } from "./signin-form.types";

export async function signinUser(
  _prevState: SigninFormValidations,
  formData: FormData,
): Promise<SigninFormValidations> {
  const supabase = await createClient();
  const formDataEmail = formData.get("email") as string;

  try {
    const { email } = validateFormFields<SigninFormData, SigninFormValidations>(
      formData,
      SIGNIN_FORM_SCHEMA,
    );

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
      },
    });

    if (error) {
      throw new Error(error.message);
    }

    return {
      ok: true,
      message:
        "Um email foi enviado para sua caixa de mensagens. Acesse e clique no link de login.",
      data: {
        email: "",
      },
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
      message: (error as Error).message,
      data: {
        email: formDataEmail,
      },
    };
  }
}
