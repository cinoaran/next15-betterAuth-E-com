import {APP_NAME_FIRST, APP_NAME_SECOND} from "@/lib/constants";
import {MailCheck, MapPin, Phone} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mx-auto text-foreground border-t-[0.3px] border-foreground/10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 py-10 place-items-center grid-wrap px-10">
        <div className="flex flex-col items-center justify-center md:items-start gap-2 md:min-w-[250px] border-b-[0.3px] border-primary  hover:border-primary/20 pb-8">
          <h6 className="mb-4 font-semibold uppercase">Products</h6>
          <p className="underlined">
            <Link href="#!">Angular</Link>
          </p>
          <p className="underlined">
            <Link href="#!">React</Link>
          </p>
          <p className="underlined">
            <Link href="#!">Vue</Link>
          </p>
          <p className="underlined">
            <Link href="#!">Laravel</Link>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start gap-2 md:min-w-[250px] border-b-[0.3px] border-primary  hover:border-primary/20 pb-8">
          <h5 className="mb-4 text-center font-semibold uppercase">
            Useful links
          </h5>
          <p className="underlined">
            <Link href="#!">Pricing</Link>
          </p>
          <p className="underlined">
            <Link href="#!">Settings</Link>
          </p>
          <p className="underlined">
            <Link href="#!">Orders</Link>
          </p>
          <p className="underlined">
            <Link href="#!">Help</Link>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start gap-5 md:min-w-[140px] border-b-[0.3px] border-primary hover:border-primary/20 pb-8">
          <h6 className="mb-4 font-semibold uppercase">Contact</h6>
          <p className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 flex-wrap">
            <MapPin size={20} />
            <span className="text-center">New York, NY 10012</span>
          </p>
          <p className="flex flex-col sm:flex-row items-center justify-start gap-4 flex-wrap">
            <span>
              <MailCheck size={20} />
            </span>
            <span>info@example.com</span>
          </p>

          <p className="flex flex-col sm:flex-row items-center justify-start gap-4 flex-wrap">
            <span>
              <Phone size={20} />
            </span>
            <span>+ 01 234 567 88</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-2 flex-wrap font-semibold uppercase space-y-5 md:space-y-0">
        <Link
          href="/"
          className="flex flex-col items-center md:flex-row md:items-end justify-center gap-2 "
          aria-label="Logo"
        >
          <h1 className="flex items-center justify-center flex-wrap text-primary font-semibold uppercase">
            <span className="text-foreground text-semibold">
              {APP_NAME_FIRST}
            </span>

            {APP_NAME_SECOND}
          </h1>
        </Link>
        <span className="h-10 text-center">
          © {new Date().getFullYear()} Copyright
        </span>
      </div>
    </footer>
  );
};

export default Footer;
