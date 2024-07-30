import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema, formSchema } from "../schemas/formSchema";

const useForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  return { register, handleSubmit, errors, reset };
};

export default useForms;
