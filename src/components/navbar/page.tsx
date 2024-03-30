import Logo from "./logo";
import NavigationBar from "./navigation-bar";
import ActionsButtons from "./actions-buttons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <section className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl m-auto px-4">
        <div className="flex justify-between items-center h-16">
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
      <div className="bg-secondary flex justify-center items-center gap-2 p-1">
        <p className="text-white font-bold">Contáctanos</p>
        <FaWhatsapp className="text-white text-xl"></FaWhatsapp>
        <p className="text-white font-bold">+52 55 6177 6839</p>
      </div>
    </section>
  );
};

export default Navbar;
