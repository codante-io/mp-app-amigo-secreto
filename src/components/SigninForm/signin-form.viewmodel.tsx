"use client";

import { signinUser } from "./signin-form.actions";
import { useSigninFormModel } from "./signin-form.model";
import { SigninFormView } from "./signin-form.view";

export const SigninFormViewModel = () => {
  const model = useSigninFormModel({ action: signinUser });

  return <SigninFormView model={model} />;
};
