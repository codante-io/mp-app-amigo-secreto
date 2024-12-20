import { Text } from "@/components/ui/text";
import { Gift } from "lucide-react";
import { MenuView } from "../Menu/menu.view";

export const Header = () => {
  return (
    <header className="h-20 flex justify-between items-center px-14">
      <div className="flex items-center gap-2">
        <Gift className="text-primitive-redPrimary" />
        <Text className="text-xl text-zinc-100 font-bold">AmigoSecreto</Text>
      </div>

      <MenuView />
    </header>
  );
};
