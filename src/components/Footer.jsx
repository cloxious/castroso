import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-primary text-white border-t-2 border-primary-dark">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Amor y Abrigo</h3>
            <p className="text-sm mb-2">San Pedro Sula, Honduras</p>
            <p className="text-sm mb-2">Teléfono: +504 9824-8715</p>
            <p className="text-sm">Email: amoryabrigo13@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary-light">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/animals" className="hover:text-secondary-light">
                  Animales
                </Link>
              </li>
              <li>
                <Link to="/sponsorship" className="hover:text-secondary-light">
                  Apadrinamiento
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-secondary-light">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-secondary-light">
                  Donar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Más Información</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-secondary-light">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-secondary-light">
                  Artículos
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-secondary-light">
                  Fotogalería
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-secondary-light">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary-light">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/amoryabrigohn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-light"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/amoryabrigo/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-light"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p>
            &copy; {new Date().getFullYear()} Amor y Abrigo. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
