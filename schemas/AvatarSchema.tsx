import {z} from "zod";

export const AvatarSchema = z.object({
  url: z
    .string()
    .url()
    .regex(new RegExp("https://utfs\.io/f/[A-Za-z0-9]+"), {
      message: "Url does not match",
    }),
});
