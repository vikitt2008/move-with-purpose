"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Начало" },
    { href: "/info", label: "Информация и регистрация" },
    { href: "/about", label: "За нас" },
    { href: "/cause", label: "Каузата" },
  ];

  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <Link href="/" className="text-xl font-bold tracking-tight">
        MOVE WITH PURPOSE
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`border-b-2 pb-1 transition-opacity ${
                isActive
                  ? "border-[#17251d]"
                  : "border-transparent hover:opacity-60"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}