"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsPinterest,
} from "react-icons/bs";

interface SocialIcon {
  id: number;
  href: string;
  nameICon: JSX.Element;
}

interface TextFooter {
  id: number;
  href: string;
  text: string;
}

const Footer = () => {
  const socialIcon: SocialIcon[] = [
    {
      id: 1,
      href: "#",
      nameICon: <BsFacebook />,
    },
    {
      id: 2,
      href: "#",
      nameICon: <BsInstagram />,
    },
    {
      id: 3,
      href: "#",
      nameICon: <BsTwitter />,
    },
    {
      id: 4,
      href: "#",
      nameICon: <BsPinterest />,
    },
  ];

  const textFooter: TextFooter[] = [
    {
      id: 1,
      href: "#",
      text: "Aviso legal",
    },
    {
      id: 2,
      href: "#",
      text: "Política de privacidad",
    },
    {
      id: 3,
      href: "#",
      text: "Política de cookies",
    },
    {
      id: 4,
      href: "#",
      text: "Condiciones generales de venta, entrega y devoluciones",
    },
    {
      id: 5,
      href: "#",
      text: "Cómo pagar",
    },
  ];

  const MotionLink = motion(Link);
  return (
    <>
      <div className="bg-primary w-full h-5"></div>
      <section className="max-w-7xl m-auto pt-4 pb-4 px-4">
        <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between items-center pb-4">
          <Image
            src="/soporte-tesis.webp"
            width={180}
            height={60}
            priority={true}
            alt="logo-soporte-tesis"
          ></Image>
          <div className="text-center">
            <h5 className="pb-4 text-secondary font-medium">Síguenos</h5>
            <div className="flex gap-4">
              {socialIcon.map((icon) => (
                <MotionLink
                  key={icon.id}
                  href={icon.href}
                  className="text-3xl text-secondary"
                  whileHover={{ scale: 1.2, color: "#16A34A" }}
                  whileTap={{ scale: 0.9 }}
                >
                  {icon.nameICon}
                </MotionLink>
              ))}
            </div>
          </div>
        </div>
        <div className="flex space-x-1 justify-center flex-wrap text-center">
          {textFooter.map((text, index) => (
            <div key={text.id}>
              <Link
                href={text.href}
                className="text-sm font-medium text-secondary hover:text-primary"
              >
                {text.text}
              </Link>
              {index !== textFooter.length - 1 && "  |"}
            </div>
          ))}
        </div>
        <p className="text-center text-sm font-medium text-secondary">
          ©️2024 Soporte Tesis
        </p>
      </section>
    </>
  );
};
export default Footer;
