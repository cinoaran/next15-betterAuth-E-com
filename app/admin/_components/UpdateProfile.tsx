"use client";
import {FieldValues, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {ProfileSchema} from "@/schemas/ProfileSchema";
import type {z} from "zod";
import {Input} from "@/components/ui/input";

import {Button} from "@/components/ui/button";
import {useState} from "react";
import FormError from "@/components/shared/authComponent/FormError";
import FormSuccess from "@/components/shared/authComponent/FormSuccess";

import Spinner from "@/components/shared/Loader/Spinner";
import {Switch} from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {UpdateProfile} from "@/actions/admin/profile/update-profile";

interface UpdateProfileProps {
  user: {
    email: string;
    name: string;
    role: string;
    banned: boolean | null | undefined;
    emailVerified: boolean | null;
  };
}

const UpdateProfileForm = ({user}: UpdateProfileProps) => {
  if (!user) {
    return null;
  }
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    mode: "onChange",
    defaultValues: {
      name: user?.name,
      role: (["admin", "user", "merchant"].includes(user?.role as string)
        ? user?.role
        : "user") as "admin" | "user" | "merchant",
      banned: user?.banned ?? false,
      emailVerified: user?.emailVerified ?? false,
    },
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: z.infer<typeof ProfileSchema>) => {
    setIsPending(true);
    try {
      const user = await UpdateProfile(data);
      setSuccess(user?.success);

      if (user.error) {
        setSuccess("");
        setError(user?.error);
      }
    } catch (error) {
      setError("Something went wrong!");
      console.log(error);
    } finally {
      setError("");
      setSuccess("");
      setIsPending(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center md:px-10 w-full"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center my-5 gap-5 w-full">
          <FormField
            control={form.control}
            name="emailVerified"
            render={({field}: {field: FieldValues}) => (
              <FormItem className="py-3 w-[90%] sm:w-38 h-28 flex flex-col items-center justify-center text-center rounded-lg p-3 shadow-none border-[0.3px] border-primary/30 ring-0">
                <FormLabel className={`font-thin text-[0.6rem] md:text-lg`}>
                  Email Verified
                </FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="banned"
            render={({field}: {field: FieldValues}) => (
              <FormItem className="py-3 w-[90%] sm:w-38 h-28 flex flex-col items-center justify-center text-center rounded-lg p-3 shadow-none border-[0.3px] border-primary/30 ring-0">
                <FormLabel className={`font-thin text-[0.6rem] md:text-lg`}>
                  Banned
                </FormLabel>

                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({field}: {field: FieldValues}) => (
              <FormItem className="py-3 w-[90%] sm:w-38 h-28 flex flex-col items-center justify-center text-center rounded-lg p-3 shadow-none border-[0.3px] border-primary/30 ring-0">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="merchant">Merchant</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({field}: {field: FieldValues}) => (
            <FormItem className="py-3 w-full">
              <FormLabel
                className={`font-thin text-[0.6rem] md:text-lg ${
                  form.formState.errors.name
                    ? "text-destructive"
                    : "text-foreground"
                }`}
              >
                Username
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="text"
                  placeholder="Max Muster"
                  {...field}
                  className="w-full border-b-[0.3px] rounded-none outline-none focus-visible:ring-transparent focus-visible:border-b-[0.3px] border-primary-foreground/30 py-5 text-[0.6rem] md:text-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          type="submit"
          disabled={isPending || !form.formState.errors}
          variant={"outline"}
          className="rounded-md w-full bg-primary text-primary-foreground text-sm md:text-md cursor-pointer py-6 mt-5 animate-in transition-all duration-200 ease-in-out hover:shadow-sm shadow-sm hover:shadow-accent-foreground/50 focus-visible:ring-2 focus-visible:ring-link focus-visible:ring-offset-2 focus-visible:ring-offset-background uppercase"
        >
          {isPending ? "Updating..." : "Update"}
          {form.formState.isSubmitting && <Spinner />}
        </Button>
      </form>
    </Form>
  );
};

export default UpdateProfileForm;
