"use client";

import {useState, Suspense} from "react";
import {useSearchParams} from "next/navigation";
import {FieldValues, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {ResetPasswordSchema} from "@/schemas/auth/ResetPasswordSchema";

import {authClient} from "@/lib/auth-client";

import {useRouter} from "next/navigation";
import FormSuccess from "@/components/shared/authComponent/FormSuccess";
import Spinner from "@/components/shared/Loader/Spinner";
import {Button} from "@/components/ui/button";
import FormError from "@/components/shared/authComponent/FormError";
import {PasswordInput} from "@/components/ui/password-Input";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [formError, setFormError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setIsPending] = useState(false);

  const form = useForm<z.infer<typeof ResetPasswordSchema>>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof ResetPasswordSchema>) => {
    setIsPending(true);
    const {error} = await authClient.resetPassword({
      newPassword: data.password,
      token: searchParams.get("token") as string,
    });

    if (error) {
      setFormError(error.message);
    } else {
      setSuccess("Password reset successful. Login to continue.");
      setTimeout(() => {
        router.push("/login");
      }, 4000); // Show success for 4 seconds before redirect
    }
    setIsPending(false);
  };

  if (error === "invalid_token") {
    return (
      <div className="grow flex items-center justify-center p-4">
        <h2>Invalid Reset Link</h2>

        <div className="space-y-4">
          <p className="text-center text-foreground">
            This password reset link is invalid or has expired.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full px-2 md:px-10"
        >
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
                  New password
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
                  Confirm new password
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
          <FormError message={error ?? undefined} />
          <FormSuccess message={success} />
          <Button
            type="submit"
            disabled={isPending || !form.formState.isValid}
            variant={"outline"}
            className="rounded-md w-full cursor-pointer py-6 mt-5 animate-in transition-all duration-200 ease-in-out hover:shadow-sm shadow-sm hover:shadow-link-foreground/50 focus-visible:ring-2 focus-visible:ring-link focus-visible:ring-offset-2 focus-visible:ring-offset-background uppercase"
          >
            {isPending || !form.formState.isValid
              ? "Please fill out all fields"
              : "Change your password"}
            {form.formState.isSubmitting && <Spinner />}
          </Button>
        </form>
      </Form>
    </>
  );
}

export default function ResetPassword() {
  return (
    <Suspense>
      <ResetPasswordContent />
    </Suspense>
  );
}
