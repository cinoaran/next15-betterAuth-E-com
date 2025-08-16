import {getServerSession} from "@/helpers/getServerSession";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Home, UserCheck, UserMinus, UserPen, UserRoundPlus} from "lucide-react";
import Link from "next/link";

export default async function EmailVerified() {
  const session = await getServerSession();

  return (
    <Card className="w-[90vw] max-h-1/4 md:w-1/2 bg-primary/10 text-foreground px-5 border-[0.3px] border-foreground/10 rounded-lg backdrop-blur-md shadow-md shadow-foreground/10 mx-auto font-roboto font-thin my-20">
      <CardHeader>
        <CardTitle>
          <h1 className="text-2xl text-center">Email verification</h1>
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-1/4 my-5">
          {session && session?.user.emailVerified ? (
            <div className="text-center text-lg text-foreground space-y-17">
              <div className="flex items-center justify-center gap-5">
                <UserCheck className="rounded-link aspect-square w-16 h-16" />
                <p>
                  Your email is verfied and you are loggedin to your account
                </p>
              </div>
              <div className="flex items-center justify-between gap-5">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-2 uppercase underlined"
                >
                  <Home size="16" /> Home
                </Link>
                <Link
                  href={`${session.user.role}/profile`}
                  className="flex items-center justify-center gap-2 uppercase underlined"
                >
                  <UserPen size="16" /> Profile
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 text-center text-lg text-foreground space-y-17">
              <div className="flex items-center justify-center gap-5">
                <UserMinus className="rounded-link aspect-square w-16 h-16" />
                <p className="flex-1">
                  Uuups something went wrong! It seems like your time to verify
                  your email gone over!
                </p>
              </div>
              <Link
                href="/"
                className="flex items-center justify-center gap-2 uppercase underlined w-[max-content]"
              >
                <Home size="16" /> Home
              </Link>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
