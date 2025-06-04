import {MessageSquareMore, MoveLeft} from "lucide-react";
import Link from "next/link";
import PasswordForm from "../_components/reset/PasswordForm";

const ResetPasswordPage = async () => {
  return (
    <div className="w-full md:w-3/4 bg-primary/10 text-foreground px-5 border-[0.3px] border-foreground/10 rounded-lg backdrop-blur-md shadow-md shadow-foreground/10 mx-auto font-roboto font-thin my-20">
      <h2 className="w-full text-2xl md:text-4xl text-center text-foreground text-semibold space-y-5 py-5">
        Login to your account !!
      </h2>
      <ul className="flex items-center md:flex-row flex-col justify-center gap-10 text-foreground border-b-[0.3px] border-foreground/10 py-2 md:py-10 text-md">
        <li className="flex flex-col md:flex-row items-center justify-center md:items-start gap-4">
          <MessageSquareMore size={24} /> Please enter your new password and
          confirm it.
        </li>
      </ul>
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10">
        <PasswordForm />
      </div>
      <div className="flex items-center gap-2 text-foreground py-5">
        <Link
          href="/login"
          className="text-sm h-6 text-bold text-foreground underlined"
        >
          <p className="flex items-center justify-center text-bold gap-2 font-thin">
            <MoveLeft className="h-5 w-5 animate-pulse" />
            <span>Back to login!</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
