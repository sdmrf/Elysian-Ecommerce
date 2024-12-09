import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/common/navigation/navbar";
import AccNav from "../common/navigation/accNav";
import SearchBar from "@/components/common/searchBar";
import MenuDropdown from "@/components/common/menuDropdown";
import { ModeToggle } from "@/components/common/modeToggle";
import { ShoppingCart } from "lucide-react";

const cartItemCount = 5;

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-background shadow-cartoon rounded-sm m-2">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="block md:hidden">
              <MenuDropdown />
            </div>
            <Link to="/" className="text-primary font-aquire text-xl md:text-2xl">
              ELYSIAN
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex">
                <ModeToggle />
              </div>
              <Link
                to="/account"
                className="flex items-center text-foreground hover:text-foreground/90 transition-colors"
              >
                <AccNav />
              </Link>
              <Link
                to="/cart"
                className="relative flex items-center text-foreground hover:text-foreground/90 transition-colors"
              >
                <ShoppingCart size={24} className="mr-2" />
                {cartItemCount > 0 && (
                  <span className="absolute bottom-3 left-2 bg-primary text-background text-xs font-bold rounded-full px-2 py-1">
                    {cartItemCount}
                  </span>
                )}
                <span className="hidden lg:flex">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
