import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import SearchBar from "./searchBar";

const navItems = [
  {
    name: "Categories",
    href: "/categories",
    children: [
      { name: "Men", href: "/categories/men" },
      { name: "Women", href: "/categories/women" }, 
      { name: "Kids", href: "/categories/kids" },
      { name: "Accessories", href: "/categories/accessories" },
      { name: "Sale", href: "/categories/sale" },
    ],
  },
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Best Sellers", href: "/best-sellers" },
  { name: "Featured Products", href: "/featured-products" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background md:shadow-cartoon-reverse rounded-sm m-2">
      <NavigationMenu className="hidden sm:flex">
        <NavigationMenuList className="flex space-x-6">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.name} className="relative">
              <NavigationMenuTrigger className="transition-colors duration-200 hover:bg-accent hover:text-accent-foreground p-2 rounded-md">
                {item.name}
              </NavigationMenuTrigger>

              {item.children && (
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px]">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <NavigationMenuLink>
                          <Link
                            to={child.href}
                            className="block transition-colors duration-200 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
                          >
                            {child.name}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="sm:hidden">
        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
