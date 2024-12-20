import { Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export const MenuView = () => {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        <li>
          <Link
            href="/meus-grupos"
            className="flex items-center gap-2 hover:text-zinc-500 cursor-pointer"
          >
            <Users />
            Meus grupos
          </Link>
        </li>
        <li>
          <Link href="/novo-grupo">
            <Button
              variant="outline"
              className="bg-transparent hover:bg-zinc-600 hover:text-zinc-50"
            >
              Novo grupo
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
