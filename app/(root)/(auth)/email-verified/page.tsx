import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Home, LayoutDashboard} from "lucide-react";
import Link from "next/link";

export default function EmailVerified() {
  return (
    <Card className="w-full md:w-1/4 bg-primary/10 text-primary-foreground px-5 border-[0.3px] border-foreground/10 rounded-lg backdrop-blur-md shadow-md shadow-foreground/10 mx-auto font-roboto font-thin my-20">
      <CardHeader>
        <CardTitle>Thanks for Verifing your Email</CardTitle>
        <CardDescription>Please select your where to go next.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-2">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 max-w-fit underlined hover:bg-transparent"
          >
            <Home size={16} /> Home
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center justify-center gap-2 max-w-fit underlined hover:bg-transparent"
          >
            <LayoutDashboard size={18} /> Dashboard
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
