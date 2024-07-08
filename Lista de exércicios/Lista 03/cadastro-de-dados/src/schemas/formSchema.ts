import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres"),
  age: z.number().int().positive("A idade deve ser um número"),
  gender: z.enum(["masculino", "femenino", "outros"], {
    invalid_type_error: "Gênero inválido",
  }),
  email: z
    .string()
    .min(3, "O Email deve ter no mínimo 3 caracteres")
    .email("Email inválido"),
  phone: z
    .string()
    .min(1, "O Telefone é obrigatório")
    .max(11, "O Telefone deve ter no máximo 11 caracteres"),
  address: z.string().min(3, "O Endereço é obrigatório"),
  city: z.enum(["sãopaulo", "goiania"], {
    invalid_type_error: "Cidade inválida",
  }),
  interest: z
    .array(z.enum(["Esporte", "Musica", "Leitura", "Viagens"]))
    .optional(),
  acceptNewsletters: z.boolean().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
