import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormSchema, formSchema } from "../schemas/formSchema";

const useForms = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
    setValue,
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hobbies: [],
      newsletter: false,
    },
  });

  return { register, handleSubmit, errors, reset, getValues, setValue };
};

export default useForms;
