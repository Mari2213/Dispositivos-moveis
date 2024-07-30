import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  age: z.number().min(2, "Idade deve ser maior ou igual a 18"),
  genre: z.enum(["Female", "Male"]),
  email: z.string().min(4, "Email inválido").email("E-mail inválido"),
  phone: z.string().min(8, "Telefone deve ter pelo menos 8 caracteres"),
  address: z.string().min(2, "Endereço deve ter pelo menos 2 caracteres"),
  city: z
    .enum(["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Outra"])
    .refine((field) => field !== "Outra", {
      message: "Selecione uma cidade",
    }),
  hobbies: z.array(z.enum(["Sports", "Music", "Reading", "Trips"])).optional(),
  newsletter: z.boolean().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
