import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  age: z
    .number()
    .int("Age must be an integer")
    .positive("Age must be positive"),
  genre: z
    .enum(["Female", "Male"])
    .refine((value) => true, "Genre must be Female or Male"),
  email: z
    .string()
    .email("Invalid email")
    .regex(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Invalid email"),
  phone: z
    .string()
    .regex(
      /^(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})$/,
      "Invalid phone",
    ),
  address: z.string().min(5, "Endereço deve ter pelo menos 2 caracteres"),
  city: z
    .enum(["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Outra"])
    .refine((value) => true, "City must be one of the options"),
  hobbies: z.array(z.enum(["Sports", "Music", "Reading", "Trips"])).optional(),
  newsletter: z.boolean().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
