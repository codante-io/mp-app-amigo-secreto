import { createClient } from "@/utils/supabase/client";
import { useActionState, useCallback, useEffect, useState } from "react";
import { UseCreateGroupFormModelProps } from "./create-group-form.types";

type Participant = {
  id: string;
};

export const useCreateGroupFormModel = ({
  action,
}: UseCreateGroupFormModelProps) => {
  const supabase = createClient();

  const [mainParticipantId, setMainParticipantId] = useState<string>("");
  const [mainParticipantEmail, setMainParticipantEmail] = useState<string>("");
  const [mainParticipantName, setMainParticipantName] = useState<string>("");

  const [formState, formAction, isPending] = useActionState(action, {});

  const getCurrentUser = useCallback(async () => {
    const user = await supabase.auth.getUser();
    setMainParticipantId(user.data.user?.id ?? "");
    setMainParticipantEmail(user.data.user?.email ?? "");
    setMainParticipantName(user.data.user?.email?.split("@")[0] ?? "");
  }, [supabase.auth]);

  const [participants, setParticipants] = useState<Participant[]>([]);

  const addParticipant = useCallback(() => {
    setParticipants([...participants, { id: crypto.randomUUID() }]);
  }, [participants]);

  const removeParticipant = useCallback(
    (id: string) => {
      setParticipants(participants.filter((p) => p.id !== id));
    },
    [participants],
  );

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return {
    participants,
    addParticipant,
    removeParticipant,
    mainParticipantId,
    mainParticipantEmail,
    mainParticipantName,
    formState,
    formAction,
    isPending,
  };
};
