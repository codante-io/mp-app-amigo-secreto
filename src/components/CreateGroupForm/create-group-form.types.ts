import { useCreateGroupFormModel } from "./create-group-form.model";

export type CreateGroupFormViewProps = {
  model: ReturnType<typeof useCreateGroupFormModel>;
};

export type UseCreateGroupFormModelProps = {
  action: (
    prevState: CreateGroupFormState,
    data: FormData,
  ) => Promise<CreateGroupFormState>;
};

export type GroupNameValidation = {
  nameMessage?: string;
};

export type ParticipantValidation = {
  id: string;
  nameMessage?: string;
  emailMessage?: string;
};

type CreateGroupFormData = {
  name: string;
  ids: string[];
  participants: string[];
  emails: string[];
};

export type CreateGroupFormState = {
  ok?: boolean;
  message?: string;
  data?: CreateGroupFormData;
  groupNameError?: GroupNameValidation;
  participantErrors?: ParticipantValidation[];
};
