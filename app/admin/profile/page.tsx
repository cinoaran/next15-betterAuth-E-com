import {auth} from "@/lib/auth";
import {headers} from "next/headers";

import {redirect} from "next/navigation";
import React from "react";
import UpdateProfile from "../_components/UpdateProfile";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  if (!session || session.user.role !== "admin") {
    return redirect("/");
  }

  return (
    <div className="w-[90vw] md:w-3/4 bg-secondary text-foreground border-[0.3px] border-foreground/10 rounded-lg backdrop-blur-md shadow-md shadow-foreground/10 mx-auto my-12">
      <h5 className="text-center h-16 my-10 border-b-[0.3px] border-b-primary-foreground/30">
        {session.user.name}, update your profile!
      </h5>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mx-auto my-10">
        <div className="flex items-center justify-center w-full h-full md:flex-2 px-2">
          <UpdateProfile user={session.user} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
