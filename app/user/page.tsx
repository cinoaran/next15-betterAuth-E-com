import {getServerSession} from "@/helpers/getServerSession";
import {redirect} from "next/navigation";
import React from "react";

export const metadata = {
  title: "User Page",
  description: "User page for authenticated users",
};

const UserPage = async () => {
  const isLoggedIn = await getServerSession();
  if (!isLoggedIn || !["admin", "user"].includes(isLoggedIn.user.role)) {
    return redirect("/");
  }

  return (
    <div className="container min-h-screen bg-secondary text-foreground border-[0.3px] border-foreground/10 rounded-lg backdrop-blur-md shadow-md shadow-foreground/10 mx-auto my-12">
      UserPage
    </div>
  );
};

export default UserPage;
