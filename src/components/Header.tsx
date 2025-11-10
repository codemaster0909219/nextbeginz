"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import LogoImage from '../assets/icons/nextbegin_header_64.svg';
import MenuIcon from '../assets/icons/menu.svg';
import { motion } from "framer-motion";
import { Link } from "@/components/ui/link";
// import {
//   PlusGrid,
//   PlusGridItem,
//   PlusGridRow,
// } from "@/components/ui/plusgrid";
import { Logo } from "@/components/ui/logo";
import { siteConfig } from "@/config/site";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/career", label: "Career" },
  { href: "/blog", label: "Blog" },
];

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex items-center gap-2 overflow-x-hidden">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="
  relative flex items-center h-16 px-5
  text-lg font-medium text-white rounded-md
  transition-all duration-300
  border border-transparent
  hover:border-[#22f6ff]
hover:shadow-[0_0_18px_#22f6ff]
hover:bg-[#22f6ff]/10

"


        >
          {label}
        </Link>
      ))}
    </nav>
  );
}


function MobileNavButton() {
  return (
    <DisclosureButton
      className="flex size-12 items-center justify-center self-center rounded-lg data-[hover]:bg-black/5 lg:hidden"
      aria-label="Open main menu"
    >
      <MenuIcon className="text-white" />
    </DisclosureButton>
  );
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4 bg-black px-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link
              href={href}
              className="text-base font-medium text-white"
            >
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute">
        <div className="absolute inset-x-0 top-0 border-t border-black/5 dark:border-white/5" />
        <div className="absolute inset-x-0 top-2 border-t border-black/5 dark:border-white/5" />
      </div>
    </DisclosurePanel>
  );
}

export function Header({ banner }: { banner?: React.ReactNode }) {
  return (
    <Disclosure as="header" className="bg-black overflow-x-hidden">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <LogoImage className="w-18 h-18" />
        </Link>

        {/* Desktop Nav */}
        <DesktopNav />

        {/* Mobile button */}
        <MobileNavButton />
      </div>

      <MobileNav />
    </Disclosure>
  );
}

