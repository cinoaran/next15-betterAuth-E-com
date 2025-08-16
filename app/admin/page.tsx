import React from "react";
import {DataTable} from "./_components/DataTable";
import {prisma} from "@/lib/prisma"; // Adjust the import path as needed
import {columns} from "./_components/Columns";
import {getServerSession} from "@/helpers/getServerSession";
import {redirect} from "next/navigation";

const AdminPage = async () => {
  const isAdmin = await getServerSession();
  if (isAdmin?.user.role !== "admin") {
    return redirect("/");
  }

  const data = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
      updatedAt: true,
      emailVerified: true,
      role: true,
    },
  });

  if (!data) {
    return (
      <div className="container  bg-secondary text-foreground border-[0.3px] border-foreground/10 rounded-lg backdrop-blur-md shadow-md shadow-foreground/10 mx-auto my-12">
        No users found
      </div>
    );
  }
  return (
    <div className="container  bg-secondary text-foreground border-[0.3px] border-foreground/10 rounded-lg backdrop-blur-md shadow-md shadow-foreground/10 mx-auto my-12">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AdminPage;
