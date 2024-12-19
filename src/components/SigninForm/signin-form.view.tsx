import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Label } from "@radix-ui/react-label";
import { SigninFormViewProps } from "./signin-form.types";

export const SigninFormView = ({ model }: SigninFormViewProps) => {
  const { formAction, formState, isPending } = model;

  return (
    <form action={formAction} noValidate>
      <Card className="bg-zinc-700 max-w-[400px] p-3 border border-zinc-800 shadow-2xl">
        <CardHeader className="mb-4">
          <CardTitle className="mb-2">
            <Text className="text-zinc-50 text-2xl">Login</Text>
          </CardTitle>
          <CardDescription>
            <Text className="text-zinc-400 text-sm">
              Digite seu email para receber um link de login.
            </Text>
          </CardDescription>
        </CardHeader>

        <CardContent className="mb-1">
          <div className="grid">
            <Label htmlFor="email" className="text-zinc-50">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              defaultValue={formState.data?.email}
              className="bg-transparent mt-4 mb-1"
            />
            <small className="h-6 text-red-500">
              {formState.fieldErrors?.email && formState.fieldErrors.email[0]}
            </small>
          </div>
        </CardContent>

        <CardFooter>
          <Button
            disabled={isPending}
            className="w-full bg-red-500 rounded-md hover:bg-red-600 active:bg-red-800 disabled:opacity-50"
          >
            {isPending ? "Enviando..." : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
