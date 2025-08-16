import Loginform from "../_components/Loginform";
import {
  UserCheck,
  TvMinimal,
  UserPen,
  MessageSquareMore,
  MailCheck,
} from "lucide-react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="w-[90vw] md:w-3/4 bg-secondary text-foreground border-[0.3px] border-foreground/10 rounded-lg backdrop-blur-md shadow-md shadow-foreground/10 mx-auto my-12">
      <div className="flex items-center justify-center flex-col border-b-2 border-foreground/5 md:px-5 pb-10">
        <h5 className="flex items-center justify-center text-center uppercase py-10">
          Login to your account.
        </h5>
        <ul className="flex flex-col items-center md:flex-row gap-10">
          <li className="flex flex-col md:flex-row items-center justify-center text-center gap-2">
            <span className="icon p-2">
              <MailCheck size={22} />
            </span>
            Secure login with email verify
          </li>
          <li className="flex flex-col md:flex-row items-center justify-center text-center gap-2">
            <span className="icon p-2">
              <UserCheck size={22} />
            </span>
            Access to your profile
          </li>
          <li className="flex flex-col md:flex-row items-center justify-center text-center gap-2">
            <span className="icon p-2">
              <TvMinimal size={22} />
            </span>
            Listings of your shopping history
          </li>
        </ul>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mx-auto my-10">
        <div className="flex items-center justify-center w-full h-full md:flex-2 px-2">
          <Loginform />
        </div>
      </div>
      <div className="flex items-center flex-col md:flex-row justify-between gap-2 py-5 px-10">
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
