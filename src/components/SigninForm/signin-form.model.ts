import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { SigninFormValidations, UseSigninFormModel } from "./signin-form.types";

const INITIAL_STATE: SigninFormValidations = {};

export const useSigninFormModel = ({ action }: UseSigninFormModel) => {
  const [formState, formAction, isPending] = useActionState(
    action,
    INITIAL_STATE,
  );

  useEffect(() => {
    if (formState.ok === undefined) return;

    if (formState.ok) {
      toast.success(formState.message);
    }

    if (!formState.ok) {
      toast.error(formState.message);
    }
  }, [formState]);

  return {
    formState,
    formAction,
    isPending,
  };
};
