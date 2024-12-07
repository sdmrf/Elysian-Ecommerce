import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/common/navigation/navbar";
import AccNav from "../common/navigation/accNav";
import SearchBar from "@/components/common/searchBar";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-background shadow-cartoon rounded-sm m-2">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="text-primary font-bold text-xl">
              ELYSIAN
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/account"
                className="flex items-center text-foreground hover:text-foreground/90 transition-colors"
              >
                <AccNav />
              </Link>
              <Link
                to="/cart"
                className="flex items-center text-foreground hover:text-foreground/90 transition-colors"
              >
                <ShoppingCart size={24} className="mr-2" />
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
