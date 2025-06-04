import Loginform from "../_components/Loginform";
import {
  UserCheck,
  TrafficCone,
  TvMinimal,
  UserPen,
  MessageSquareMore,
} from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="w-full md:w-3/4 bg-primary/10 text-foreground px-5 border-[0.3px] border-foreground/10 rounded-lg backdrop-blur-md shadow-md shadow-foreground/10 mx-auto font-roboto font-thin my-20">
      <h2 className="w-full text-2xl md:text-4xl text-center text-foreground text-semibold space-y-5 py-5">
        Login to your account !!
      </h2>
      <ul className="flex items-center md:flex-row flex-col justify-center gap-10 text-foreground border-b-[0.3px] border-foreground/10 py-2 md:py-10 text-md">
        <li className="flex flex-col md:flex-row items-center justify-center md:items-start gap-4">
          <UserCheck size={22} /> Get your account.
        </li>
        <li className="flex flex-col md:flex-row items-center justify-center md:items-start gap-4">
          <TrafficCone size={22} /> Track your orders.
        </li>
        <li className="flex flex-col md:flex-row items-center justify-center md:items-start gap-4">
          <TvMinimal size={22} /> Comunicate with us.
        </li>
      </ul>
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10">
        <Loginform />
      </div>
      <div className="flex items-center flex-col md:flex-row justify-between gap-5 p-5">
        <div className="flex items-center gap-2 h-8 underlined text-foreground">
          <Link
            href="/reset-email"
            className="text-sm text-bold text-foreground"
          >
            <p className="flex items-center justify-center text-bold gap-2 font-thin">
              <span>Forget Password</span>
              <MessageSquareMore className="h-6 w-6 animate-pulse" />
            </p>
          </Link>
        </div>

        <div className="flex items-center gap-2 h-8 underlined text-foreground">
          <Link href="/register" className="text-sm text-bold text-foreground">
            <p className="flex items-center justify-center text-bold gap-2 font-thin">
              <span>Don&#39;t have an account ? Register</span>
              <UserPen className="h-5 w-5 animate-pulse" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
