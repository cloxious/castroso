import { DollarSign, Gift, Repeat } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

function Donate() {
  usePageTitle("Donar");
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-dark mb-6">Donar</h1>
      <p className="text-text mb-8">
        Tu donación nos ayuda a continuar nuestra misión de cuidar y encontrar
        hogares para animales necesitados. Cada contribución, sin importar su
        tamaño, hace una gran diferencia.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-none border border-primary shadow-md">
          <DollarSign className="text-primary mb-4 mx-auto" size={32} />
          <h2 className="text-xl font-semibold text-primary-dark mb-2 text-center">
            Donación Única
          </h2>
          <p className="text-text text-center">
            Haz una donación única para ayudar a nuestros animales.
          </p>
        </div>
        <div className="bg-white p-6 rounded-none border border-primary shadow-md">
          <Repeat className="text-primary mb-4 mx-auto" size={32} />
          <h2 className="text-xl font-semibold text-primary-dark mb-2 text-center">
            Donación Mensual
          </h2>
          <p className="text-text text-center">
            Conviértete en un donante recurrente y brinda apoyo constante.
          </p>
        </div>
        <div className="bg-white p-6 rounded-none border border-primary shadow-md">
          <Gift className="text-primary mb-4 mx-auto" size={32} />
          <h2 className="text-xl font-semibold text-primary-dark mb-2 text-center">
            Donación en Especie
          </h2>
          <p className="text-text text-center">
            Dona alimentos, juguetes o suministros para nuestro refugio.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary-dark mb-4">
        Cómo se utilizan tus donaciones
      </h2>
      <ul className="list-disc list-inside space-y-2 mb-8 text-text">
        <li>Alimentos y suministros para los animales</li>
        <li>Atención veterinaria y medicamentos</li>
        <li>Mantenimiento y mejoras del refugio</li>
        <li>Programas de educación y concientización</li>
      </ul>

      <button className="bg-secondary text-white px-4 py-2 rounded-none border border-primary-dark font-semibold hover:bg-secondary-dark transition duration-300">
        Hacer una Donación
      </button>
    </div>
  );
}

export default Donate;
