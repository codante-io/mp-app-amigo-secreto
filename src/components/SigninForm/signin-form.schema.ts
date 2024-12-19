import { z } from "zod";

export const SIGNIN_FORM_SCHEMA = z.object({
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
});
