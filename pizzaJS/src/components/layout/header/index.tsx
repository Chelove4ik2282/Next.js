"use client";

import * as React from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavMenuItem from "./nav-menu-item";
import { navbarService as components } from "@/features/shared/data/navbar-service"; // Здесь импортируем navbarService
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="relative flex items-center justify-between px-8 py-4 bg-gradient-to-r from-orange-900 to-orange-700 text-white">
      {/* Логотип */}
      <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">pizzashop</div>

      {/* Меню */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-15 text-sm font-semibold uppercase tracking-wide">
          {components.map((navItem) => ( // Теперь используем components для отображения меню
          <a key={navItem.id}
          href={navItem.href}
          ><NavMenuItem key={navItem.id} item={navItem} /></a>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Кнопки */}
      <div className="flex items-center gap-4">
        {/* Кнопка Log in */}
        <Link
          href="/login"
          className="px-6 py-2 text-lg font-semibold text-white-100 bg-gradient-to-r from-orange-400 to-orange-700 rounded-full transition-all duration-300 hover:from-orange-500 hover:to-orange-700"

        >
          Log in
        </Link>

        {/* Иконка корзины */}
        <button className="p-2 text-orange-500 transition-all duration-300 hover:text-orange-400">
          <FiShoppingCart size={26} />
        </button>
      </div>
    </nav>
  );
}
