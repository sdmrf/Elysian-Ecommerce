import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/common/modeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";

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

const MenuDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleMenuToggle}>
      <DropdownMenuTrigger asChild>
        <button className="block md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <ul className="flex flex-col space-y-4 p-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <DropdownMenuItem>
                <Link
                  to={item.href}
                  className="block transition-colors duration-200 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <ModeToggle />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuDropdown;
