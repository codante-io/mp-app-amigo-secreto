import { CreateGroupForm } from "@/components/CreateGroupForm";
import { Text } from "@/components/ui/text";
export default function NovoGrupo() {
  return (
    <section>
      <Text as="h1" className="text-2xl">
        Novo Grupo
      </Text>
      <Text className="text-base text-zinc-400">
        Convide seus amigos para participar
      </Text>

      <CreateGroupForm />
    </section>
  );
}
