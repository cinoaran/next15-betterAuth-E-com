import {Button} from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {Menu} from "lucide-react";
import Main from "../shared/nav";

export function SheetDemo() {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <span className="flex items-center justify-center border-2 border-link rounded-full cursor-pointer hover:text-link size-11 md:size-12">
          <Menu strokeWidth={2} />
        </span>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-background/20 backdrop-blur-lg border-foreground/10 shadow-md"
      >
        <SheetHeader className="flex flex-col items-center justify-center border-b-2 border-link/20">
          <SheetTitle className="flex items-center justify-center gap-3 text-xl font-light uppercase text-foreground/70 py-4">
            Navigation
            <span className="text-foreground/70 text-responsive-xs md:text-responsive-md">
              Menu
            </span>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <Main />
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
