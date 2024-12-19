import { redirectTo } from "@/actions/redirect";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { SigninFormValidations, UseSigninFormModel } from "./signin-form.types";

const INITIAL_STATE: SigninFormValidations = {};

export const useSigninFormModel = ({ action }: UseSigninFormModel) => {
  const [formState, formAction] = useActionState(action, INITIAL_STATE);

  useEffect(() => {
    if (formState.ok === undefined) return;

    if (formState.ok) {
      redirectTo("/");
    }

    if (!formState.ok) {
      toast.error("Problema ao realizar o seu login. Tente novamente");
    }
  }, [formState]);

  return {
    formState,
    formAction,
  };
};
