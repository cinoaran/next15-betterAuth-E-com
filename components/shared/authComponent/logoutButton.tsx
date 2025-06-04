"use client";

import {useRouter} from "next/navigation";
import {authClient} from "@/lib/auth-client";

import {useState} from "react";
import {Button} from "@/components/ui/button";
import Spinner from "../Loader/Spinner";
import {LogOutIcon} from "lucide-react";

export default function SignoutButton() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsPending(true);
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/login");
            router.refresh();
          },
        },
      });
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <Button
      type="submit"
      color="link"
      className="bg-transparent text-foreground hover:text-link text-md uppercase h-10 underlined"
      disabled={isPending}
      onClick={handleSignOut}
      variant="link"
      aria-label="Logout"
      role="button"
    >
      {isPending ? <Spinner /> : "Logout"}
      <LogOutIcon size={16} className="ml-1" />
    </Button>
  );
}
