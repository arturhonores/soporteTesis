import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import ActionsButtons from "./actions-buttons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
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
      <div className="bg-secondary flex justify-center items-center gap-1 p-1">
        <p className="text-white font-bold">Contáctanos</p>
        <FaWhatsapp className="text-white text-xl"></FaWhatsapp>
        <p className="text-white font-bold">+52 55 6177 6839</p>
      </div>
    </>
  );
};

export default Navbar;
