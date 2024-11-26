import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Heart,
  PawPrint,
  Calendar,
  DollarSign,
} from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Inicio", icon: <Home size={20} />, path: "/" },
    { name: "Animales", icon: <PawPrint size={20} />, path: "/animals" },
    { name: "Apadrinamiento", icon: <Heart size={20} />, path: "/sponsorship" },
    { name: "Eventos", icon: <Calendar size={20} />, path: "/events" },
    { name: "Donar", icon: <DollarSign size={20} />, path: "/donate" },
  ];

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://amoryabrigo.org/wp-content/uploads/2020/08/Logo-Amor-y-Abrigo-HORIZONTAL-300x67.png"
              alt="Amor y Abrigo"
              className="h-10 w-auto mr-2"
            />
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:text-secondary-light">
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-primary-dark transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          <button onClick={toggleMenu} className="mb-4">
            <X size={24} />
          </button>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="hover:text-secondary-light flex items-center"
                  onClick={toggleMenu}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
