
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-blue-600">
              Brand<span className="text-gray-800">Name</span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Features
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Testimonials
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Pricing
            </a>
            <Button className="ml-4 bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              Features
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              Testimonials
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600">
              Pricing
            </a>
            <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
