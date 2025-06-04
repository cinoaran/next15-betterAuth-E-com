import {betterAuth, BetterAuthOptions} from "better-auth";
import {prismaAdapter} from "better-auth/adapters/prisma";
import {prisma} from "./prisma";

import {openAPI} from "better-auth/plugins";
import {verifyEmail} from "@/actions/emails/verify";
import {PasswordReset} from "@/actions/emails/password-reset";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [openAPI()], // api/auth/reference
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    // BUG: Prob a bug with updateAge method. It throws an error - Argument `where` of type SessionWhereUniqueInput needs at least one of `id` arguments.
    // As a workaround, set updateAge to a large value for now.
    updateAge: 60 * 60 * 24 * 7, // 7 days (every 7 days the session expiration is updated)
  },
  user: {
    additionalFields: {
      role: {type: "string", required: true},
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    /* Set it back to true for Resend or other better paossibilities rather than Nademailer */
    /* requireEmailVerification: true, */
    sendResetPassword: async ({user, url}) => {
      const sendResetPasswordUrl = url;
      await PasswordReset({
        username: user.name,
        from: "not-reply",
        to: user.email,
        subject: "Reset your password",
        verificationUrl: sendResetPasswordUrl,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: false,
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
