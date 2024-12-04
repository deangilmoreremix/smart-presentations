"use client";

import { useForm as useHookForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { UseFormProps } from "react-hook-form";
import type { TypeOf, ZodSchema } from "zod";

interface UseFormOptions<T extends ZodSchema> extends Omit<UseFormProps<TypeOf<T>>, "resolver"> {
  schema: T;
}

export function useForm<T extends ZodSchema>({ 
  schema,
  ...formConfig 
}: UseFormOptions<T>) {
  return useHookForm({
    ...formConfig,
    resolver: zodResolver(schema),
  });
}