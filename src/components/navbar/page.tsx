import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import ActionsButtons from "./actions-buttons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-7xl m-auto px-3">
      <div className="flex justify-between items-center h-20">
        <Logo />
        <NavigationBar />
        <ActionsButtons />
        <Link
          className={`${buttonVariants({
            variant: "default",
          })} hidden md:block`}
          href="/"
        >
          Presupuesto
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
