import { FormValidations } from "@/helpers/form-validation";
import { z } from "zod";
import { useSigninFormModel } from "./signin-form.model";
import { SIGNIN_FORM_SCHEMA } from "./signin-form.schema";

export type SigninFormViewProps = {
  model: ReturnType<typeof useSigninFormModel>;
};

export type UseSigninFormModel = {
  action: (
    prevState: SigninFormValidations,
    formData: FormData,
  ) => Promise<SigninFormValidations>;
};

export type SigninFormData = z.infer<typeof SIGNIN_FORM_SCHEMA>;

export type SigninFormValidations = FormValidations<
  Pick<z.inferFlattenedErrors<typeof SIGNIN_FORM_SCHEMA>, "fieldErrors">
> & {
  data?: Partial<SigninFormData>;
};
