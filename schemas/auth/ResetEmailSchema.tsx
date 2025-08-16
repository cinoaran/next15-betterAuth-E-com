import {z} from "zod";

export const ResetEmailSchema = z.object({
  email: z
    .string()
    .min(1, {message: "Email is required"})
    .email({message: "Invalid email"}),
});
