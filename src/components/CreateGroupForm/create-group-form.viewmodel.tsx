"use client";

import { createGroup } from "./create-group-form.actions";
import { useCreateGroupFormModel } from "./create-group-form.model";
import { CreateGroupFormView } from "./create-group-form.view";

export const CreateGroupFormViewmodel = () => {
  const model = useCreateGroupFormModel({ action: createGroup });

  return <CreateGroupFormView model={model} />;
};
