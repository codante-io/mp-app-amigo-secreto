import { Text } from "@/components/ui/text";
import { Calendar } from "lucide-react";
import Link from "next/link";
export default function MeusGrupos() {
  return (
    <section>
      <Text as="h1" className="text-2xl mb-4">
        Meus Grupos
      </Text>

      <div className="grid grid-cols-[repeat(auto-fill,_minmax(300px,_400px))] gap-3">
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
        <Link href="/grupo/1">
          <div className="border border-zinc-600 rounded-md p-4">
            <Text className="text-base font-semibold">Família Soares</Text>

            <div className="text-xs text-muted-foreground flex  items-center gap-2">
              <Calendar size={12} />
              13/12/2024
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
