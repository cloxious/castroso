import { Link } from "react-router-dom";
import { Heart, DollarSign, Users } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

function Home() {
  usePageTitle("Inicio");

  return (
    <div>
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary-dark mb-6">
            Bienvenidos a Amor y Abrigo
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Dando hogar y cariño a animales necesitados en San Pedro Sula,
            Honduras desde 2010.
          </p>
          <Link
            to="/animals"
            className="bg-secondary text-white px-6 py-3 rounded-none border border-primary-dark text-xl font-semibold hover:bg-secondary-dark transition duration-300 inline-flex items-center"
          >
            <Heart size={24} className="mr-2" />
            Conoce a Nuestros Animales
          </Link>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-none border border-primary shadow-md">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-700">
                Proporcionar un refugio seguro y amoroso para animales
                abandonados, y encontrarles hogares permanentes y cariñosos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-none border border-primary shadow-md">
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Cómo Ayudar
              </h2>
              <p className="text-gray-700">
                Puedes ayudar adoptando, donando, o siendo voluntario. Cada
                acción marca la diferencia en la vida de un animal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-background py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
            Nuestros Programas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-none border border-primary shadow-md">
              <Heart size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                Apadrinamiento
              </h3>
              <p className="text-gray-700">
                Apadrina a un animal y ayúdanos a cubrir sus necesidades
                mientras encuentra un hogar permanente.
              </p>
              <Link
                to="/sponsorship"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Saber más
              </Link>
            </div>
            <div className="bg-white p-6 rounded-none border border-primary shadow-md">
              <DollarSign size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                Donaciones
              </h3>
              <p className="text-gray-700">
                Tus donaciones nos ayudan a proporcionar alimento, atención
                médica y cuidados a nuestros animales.
              </p>
              <Link
                to="/donate"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Donar ahora
              </Link>
            </div>
            <div className="bg-white p-6 rounded-none border border-primary shadow-md">
              <Users size={48} className="text-primary mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">
                Voluntariado
              </h3>
              <p className="text-gray-700">
                Únete a nuestro equipo de voluntarios y ayuda directamente en el
                cuidado de nuestros animales.
              </p>
              <Link
                to="/volunteer"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                Ser voluntario
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-dark mb-4">
            ¿Listo para hacer la diferencia?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Cada pequeña acción cuenta. Juntos podemos crear un mundo mejor para
            los animales.
          </p>
          <Link
            to="/animals"
            className="bg-secondary text-white px-6 py-3 rounded-none border border-primary-dark text-xl font-semibold hover:bg-secondary-dark transition duration-300"
          >
            Adopta Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
