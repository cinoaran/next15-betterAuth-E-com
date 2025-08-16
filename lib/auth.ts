import {betterAuth, BetterAuthOptions} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {prisma} from "./prisma";

import {admin, openAPI, twoFactor} from "better-auth/plugins";
import {verifyEmail} from "@/actions/emails/email-verify";
import {PasswordReset} from "@/actions/emails/password-reset";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [openAPI(), admin()], // api/auth/reference
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    // BUG: Prob a bug with updateAge method. It throws an error - Argument `where` of type SessionWhereUniqueInput needs at least one of `id` arguments.
    // As a workaround, set updateAge to a large value for now.
    updateAge: 60 * 60 * 24 * 7, // 7 days (every 7 days the session expiration is updated)
  },
  user: {
    additionalFields: {
      role: {type: "string", required: true, defaultValue: "user"},
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    /* Set it back to true for Resend or other better paossibilities rather than Nademailer */
    /* requireEmailVerification: true, */
    sendResetPassword: async ({user, url}) => {
      const sendResetPasswordUrl = url;
      await PasswordReset({
        username: user.name,
        from: "no-reply@cityapartsberlin.de",
        to: user.email,
        subject: "Reset your password",
        verificationUrl: sendResetPasswordUrl,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    /* Set it back to true for Resend or other better paossibilities rather than Nademailer */
    /* autoSignInAfterVerification: true, */
    sendVerificationEmail: async ({user, token}) => {
      const sendVerificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
      await verifyEmail({
        username: user.name,
        from: "no-reply@cityapartsberlin.de",
        to: user.email,
        subject: "Verify your email address",
        verificationUrl: sendVerificationUrl,
      });
    },
  },
} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session;
