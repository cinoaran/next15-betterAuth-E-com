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
import {RegisterSchema} from "@/schemas/auth/RegisterSchema";
import {z} from "zod";
import {Input} from "@/components/ui/input";
import {PasswordInput} from "@/components/ui/password-Input";
import {Button} from "@/components/ui/button";
import {useEffect, useState} from "react";
import FormError from "@/components/shared/authComponent/FormError";
import FormSuccess from "@/components/shared/authComponent/FormSuccess";
import {authClient} from "@/lib/auth-client";
import Spinner from "@/components/shared/Loader/Spinner";

const Registerform = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    reValidateMode: "onChange",
  });

  useEffect(() => {
    const subscription = form.watch((value, {name}) => {
      if (name === "password") {
        form.setValue("confirmPassword", "");
      }
    });
    return () => subscription.unsubscribe?.();
  }, [form]);

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
    await authClient.signUp.email(
      {
        email: data.email,
        password: data.password,
        name: data.name,
      },
      {
        onRequest: () => {
          setIsPending(true);
        },
        onSuccess: () => {
          setSuccess(
            "Your account has been created. Check your email for a verification link."
          );
          form.reset();
        },
        onError: (ctx) => {
          setError(ctx.error.message ?? "Something went wrong.");
        },
      }
    );
    setIsPending(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full px-2 md:px-10"
      >
        <FormField
          control={form.control}
          name="name"
          render={({field}: {field: FieldValues}) => (
            <FormItem className="py-3 text-md">
              <FormLabel
                className={`font-thin ${
                  form.formState.errors.email
                    ? "text-accent"
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
                  className="w-full border-b-[0.3px] rounded-none outline-none focus-visible:ring-transparent focus-visible:border-b-[0.3px] border-accent/20 py-6 text-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({field}: {field: FieldValues}) => (
            <FormItem className="py-3 text-md">
              <FormLabel
                className={`font-thin ${
                  form.formState.errors.email
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  disabled={isPending}
                  type="email"
                  placeholder="max@muster.de"
                  {...field}
                  className="w-full border-b-[0.3px] rounded-none outline-none focus-visible:ring-transparent focus-visible:border-b-[0.3px] border-accent/20 py-6 text-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({field}: {field: FieldValues}) => (
            <FormItem className="py-3 text-md">
              <FormLabel
                className={`font-thin ${
                  form.formState.errors.password
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                Password
              </FormLabel>
              <FormControl>
                <PasswordInput
                  disabled={isPending}
                  {...field}
                  className="w-full border-b-[0.3px] rounded-none outline-none focus-visible:ring-transparent focus-visible:border-b-[0.3px] border-accent/20 py-6 text-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({field}: {field: FieldValues}) => (
            <FormItem className="py-3 text-md">
              <FormLabel
                className={`font-thin ${
                  form.formState.errors.confirmPassword
                    ? "text-accent"
                    : "text-foreground"
                }`}
              >
                Confirm password
              </FormLabel>
              <FormControl>
                <PasswordInput
                  disabled={isPending}
                  {...field}
                  className="border-b-[0.3px] rounded-none outline-none focus-visible:ring-transparent focus-visible:border-b-[0.3px] border-accent/20 py-6 text-md"
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
          disabled={isPending || !form.formState.isValid}
          variant={"outline"}
          className="rounded-md w-full cursor-pointer py-6 mt-5 animate-in transition-all duration-200 ease-in-out hover:shadow-sm shadow-sm hover:shadow-link-foreground/50 focus-visible:ring-2 focus-visible:ring-link focus-visible:ring-offset-2 focus-visible:ring-offset-background uppercase"
        >
          {isPending || !form.formState.isValid
            ? "Please fill out all fields"
            : "Register your account"}
          {form.formState.isSubmitting && <Spinner />}
        </Button>
      </form>
    </Form>
  );
};

export default Registerform;
