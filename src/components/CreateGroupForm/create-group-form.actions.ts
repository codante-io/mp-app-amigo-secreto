"use server";

import { z } from "zod";
import {
  CreateGroupFormState,
  ParticipantValidation,
} from "./create-group-form.types";
const emailValidation = z
  .string()
  .min(1, { message: "Email é obrigatório" })
  .email({ message: "Email inválido" });

export async function createGroup(
  _prevState: CreateGroupFormState,
  formData: FormData,
): Promise<CreateGroupFormState> {
  const groupName = formData.get("name") as string;
  const ids = formData.getAll("id") as string[];
  const participants = formData.getAll("participant") as string[];
  const emails = formData.getAll("email") as string[];

  const groupNameError = groupName
    ? undefined
    : { nameMessage: "Nome é obrigatório" };
  const participantErrors: ParticipantValidation[] = [];

  for (let i = 0; i < ids.length; i++) {
    const participant = participants[i];
    const email = emails[i];

    const validateEmail = emailValidation.safeParse(email);
    if (!participant || !validateEmail.success) {
      const nameMessage = !participant ? "Participante é obrigatório" : "";
      const emailMessage = validateEmail.error?.flatten().formErrors[0];

      participantErrors.push({
        id: ids[i],
        nameMessage,
        emailMessage,
      });
    } else {
      participantErrors.push({
        id: ids[i],
      });
    }
  }

  const hasErrors =
    groupNameError ||
    participantErrors.some((p) => p.emailMessage || p.nameMessage);

  if (hasErrors) {
    return {
      ok: false,
      data: {
        name: groupName,
        ids,
        participants,
        emails,
      },
      groupNameError,
      participantErrors,
    };
  }

  // TODO: create group
  return {
    ok: true,
    message: "Grupo criado com sucesso",
    data: {
      name: groupName,
      ids,
      participants,
      emails,
    },
  };
}
