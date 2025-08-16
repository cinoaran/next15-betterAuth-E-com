"use client";
import {MessageSquareMore, MoveLeft} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PasswordForm from "../_components/reset/PasswordForm";

const ResetPasswordPage = () => {
  return (
    <div className="w-[90%] md:w-3/4 bg-secondary text-foreground px-5 border-[0.3px] border-foreground/10 rounded-lg backdrop-blur-md shadow-md shadow-foreground/10 mx-auto font-roboto font-thin my-10">
      <div className="flex items-center justify-center flex-col border-b-2 border-foreground/5 md:px-5 pb-10">
        <h5 className="flex items-center justify-center text-center uppercase py-10">
          Change your password!!
        </h5>
        <ul className="flex flex-col items-center md:flex-row gap-10">
          <li className="flex flex-col md:flex-row items-center justify-center text-center gap-2">
            <span className="icon p-1">
              <MessageSquareMore size={18} />
            </span>
            Please enter your new password and confirm !!
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center my-10 px-2">
        <PasswordForm />
      </div>

      <div className="flex items-center gap-2 text-foreground py-5 px-10">
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
