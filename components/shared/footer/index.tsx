import {APP_NAME_FIRST, APP_NAME_SECOND} from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-foreground border-t-[0.3px] border-foreground/10">
      <div className="grid-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-10 md:place-items-center grid-wrap">
        <div className="flex flex-col items-center justify-start md:items-start gap-2 md:min-w-[250px] border-b-[0.3px] border-gray-300  hover:border-accent pb-10">
          <h6 className="mb-4 font-semibold uppercase">Products</h6>
          <p>
            <Link href="#!">Angular</Link>
          </p>
          <p>
            <Link href="#!">React</Link>
          </p>
          <p>
            <Link href="#!">Vue</Link>
          </p>
          <p>
            <Link href="#!">Laravel</Link>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start gap-2 md:min-w-[250px] border-b-[0.3px] border-gray-300  hover:border-accent pb-10">
          <h6 className="mb-4 font-semibold uppercase">Useful links</h6>
          <p>
            <Link href="#!">Pricing</Link>
          </p>
          <p>
            <Link href="#!">Settings</Link>
          </p>
          <p>
            <Link href="#!">Orders</Link>
          </p>
          <p>
            <Link href="#!">Help</Link>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center md:items-start gap-5 md:min-w-[250px] border-b-[0.3px] border-gray-300 hover:border-accent pb-10">
          <h6 className="flex items-center font-semibold uppercase">
            <span className="ml-2 text-foreground text-md text-semibold">
              {APP_NAME_FIRST}
            </span>
            <span className="ml-2 text-primary text-3xl text-semibold">
              {APP_NAME_SECOND}
            </span>
          </h6>
          <p className="w-[max-content] foreground">
            Address: New York, NY 10012, US
          </p>
          <p className="w-[max-content] foreground">Email: info@example.com</p>
          <p className="w-[max-content] foreground">Phone: + 01 234 567 88</p>
          <p className="w-[max-content] foreground">Fax: + 01 234 567 89</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center flex-wrap gap-2 mb-12">
        <h6 className="flex items-center font-semibold uppercase">
          <span className="ml-2 mb-0 text-foreground text-md text-semibold">
            © {new Date().getFullYear()} Copyright{" "}
          </span>
          <span className="ml-2 text-foreground text-md text-semibold">
            {APP_NAME_FIRST}
          </span>
          <span className="ml-2 text-primary text-3xl text-semibold">
            {APP_NAME_SECOND}
          </span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
