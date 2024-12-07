import React from "react";
import { Link } from "react-router-dom";
import { User, CircleUser, Package, Settings, LogOut } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const accNavItems = [
  { name: "Profile", href: "/account", icon: <CircleUser size={18} /> },
  { name: "Orders", href: "/account/orders", icon: <Package size={18} /> },
  { name: "Settings", href: "/account/settings", icon: <Settings size={18} /> },
  { name: "Logout", href: "/account/logout", icon: <LogOut size={18} /> },
];

const AccNav: React.FC = () => {
  return (
    <NavigationMenu className="flex">
      <NavigationMenuList className="flex space-x-6">
        <NavigationMenuItem className="relative">
          <NavigationMenuTrigger className="transition-colors duration-200 hover:bg-accent hover:text-accent-foreground p-2 rounded-md">
            <User size={24} className="mr-2" />
            Account
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1 w-[150px] gap-3 p-4">
              {accNavItems.map((item) => (
                <li key={item.name}>
                  <NavigationMenuLink>
                    <Link
                      to={item.href}
                      className="flex items-center gap-2 transition-colors duration-200 hover:bg-accent hover:text-accent-foreground p-2 rounded-md"
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default AccNav;
