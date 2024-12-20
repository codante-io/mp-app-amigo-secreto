import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Text } from "@/components/ui/text";
import { Trash2 } from "lucide-react";
import { useCallback } from "react";
import { Button } from "../ui/button";
import { CreateGroupFormViewProps } from "./create-group-form.types";

export const CreateGroupFormView = ({ model }: CreateGroupFormViewProps) => {
  const {
    participants,
    addParticipant,
    removeParticipant,
    formAction,
    formState,
    mainParticipantId,
    mainParticipantEmail,
    mainParticipantName,
  } = model;

  const renderAdditionalParticipantFields = useCallback(() => {
    return participants.map((participant, index) => {
      const currentIndex = index;

      const participantPositionData = formState.data?.ids.findIndex(
        (id) => id === participant.id,
      );
      const participantPositionError = formState.participantErrors?.findIndex(
        (error) => error.id === participant.id,
      );

      const participantName =
        participantPositionData !== undefined
          ? formState.data?.participants[participantPositionData]
          : "";
      const participantNameError =
        participantPositionError !== undefined && formState.participantErrors
          ? formState.participantErrors[participantPositionError]?.nameMessage
          : "";

      const participantEmail =
        participantPositionData !== undefined
          ? formState.data?.emails[participantPositionData]
          : "";
      const participantEmailError =
        participantPositionError !== undefined && formState.participantErrors
          ? formState.participantErrors[participantPositionError]?.emailMessage
          : "";

      return (
        <div
          key={participant.id}
          className="grid grid-cols-3 gap-6 items-center"
        >
          <div className="grid">
            <input
              type="hidden"
              id={`participant_id${currentIndex}`}
              name="id"
              defaultValue={participant.id}
            />
            <Label htmlFor={`participant${currentIndex}`}>Nome</Label>
            <Input
              id={`participant${currentIndex}`}
              name={`participant`}
              className="bg-transparent my-2"
              defaultValue={participantName}
            />
            <small className="h-6 text-red-500">{participantNameError}</small>
          </div>
          <div className="grid">
            <Label htmlFor={`email${currentIndex}`}>Email</Label>
            <Input
              id={`email${currentIndex}`}
              name={`email`}
              className="bg-transparent my-2"
              defaultValue={participantEmail}
            />
            <small className="h-6 text-red-500">{participantEmailError}</small>
          </div>

          <Button
            type="button"
            onClick={() => removeParticipant(participant.id)}
            variant="ghost"
            className="w-10"
          >
            <Trash2 />
          </Button>
        </div>
      );
    });
  }, [
    formState.data,
    formState.participantErrors,
    participants,
    removeParticipant,
  ]);

  return (
    <form action={formAction} noValidate className="mt-8">
      <div className="grid">
        <Label htmlFor="name">Nome do grupo</Label>
        <Input
          type="text"
          id="name"
          name="name"
          className="bg-transparent my-2"
          defaultValue={formState.data?.name}
        />
        <small className="h-6 text-red-500">
          {formState.groupNameError && formState.groupNameError.nameMessage}
        </small>
      </div>

      <Text className="text-xl my-6">Participantes</Text>

      <div>
        <div className="grid grid-cols-3 gap-6">
          <div className="grid">
            <input
              type="hidden"
              id="participant_id"
              name="id"
              defaultValue={mainParticipantId}
              readOnly
            />
            <Label htmlFor="participant0">Nome</Label>
            <Input
              id="participant0"
              name="participant"
              className="bg-transparent my-2"
              defaultValue={
                mainParticipantName ?? formState.data?.participants[0]
              }
              readOnly
            />
            <small className="h-6 text-red-500">
              {formState.participantErrors &&
                formState.participantErrors[0].nameMessage}
            </small>
          </div>
          <div className="grid">
            <Label htmlFor="email0">Email</Label>
            <Input
              id="email0"
              name="email"
              className="bg-transparent my-2"
              defaultValue={mainParticipantEmail ?? formState.data?.emails[0]}
            />
            <small className="h-6 text-red-500">
              {formState.participantErrors &&
                formState.participantErrors[0].emailMessage}
            </small>
          </div>
        </div>

        {renderAdditionalParticipantFields()}
      </div>

      <div className="flex justify-between border-t border-t-zinc-600 pt-8">
        <Button
          variant="outline"
          className="bg-transparent  hover:bg-zinc-600 hover:text-zinc-50"
          onClick={addParticipant}
          type="button"
        >
          Adicionar amigo
        </Button>

        <Button variant="destructive" type="submit">
          Criar grupo e enviar emails
        </Button>
      </div>
    </form>
  );
};
