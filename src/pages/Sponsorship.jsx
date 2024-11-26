import { Heart, Gift, Calendar } from "lucide-react";
import usePageTitle from "../hooks/usePageTitle";

function Sponsorship() {
  usePageTitle("Apadrinamiento");
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-dark mb-6">
        Programa de Apadrinamiento
      </h1>
      <p className="text-text mb-8">
        Nuestro programa de apadrinamiento te permite ayudar a un animal
        específico mientras está en nuestro cuidado. Tu apoyo mensual cubre sus
        necesidades básicas y atención médica.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-none border border-primary shadow-md">
          <Heart className="text-primary mb-4 mx-auto" size={32} />
          <h2 className="text-xl font-semibold text-primary-dark mb-2 text-center">
            Amor Incondicional
          </h2>
          <p className="text-text text-center">
            Brinda amor y cuidado a un animal necesitado.
          </p>
        </div>
        <div className="bg-white p-6 rounded-none border border-primary shadow-md">
          <Gift className="text-primary mb-4 mx-auto" size={32} />
          <h2 className="text-xl font-semibold text-primary-dark mb-2 text-center">
            Regalos Especiales
          </h2>
          <p className="text-text text-center">
            Recibe actualizaciones y fotos de tu apadrinado.
          </p>
        </div>
        <div className="bg-white p-6 rounded-none border border-primary shadow-md">
          <Calendar className="text-primary mb-4 mx-auto" size={32} />
          <h2 className="text-xl font-semibold text-primary-dark mb-2 text-center">
            Compromiso Flexible
          </h2>
          <p className="text-text text-center">
            Elige la duración de tu apadrinamiento.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary-dark mb-4">
        Cómo Apadrinar
      </h2>
      <ol className="list-decimal list-inside space-y-2 mb-8 text-text">
        <li>Elige un animal de nuestra lista de apadrinamiento.</li>
        <li>Selecciona el monto y la frecuencia de tu donación.</li>
        <li>Completa el formulario con tus datos.</li>
        <li>¡Listo! Recibirás información regular sobre tu apadrinado.</li>
      </ol>

      <button className="bg-secondary text-white px-4 py-2 rounded-none border border-primary-dark font-semibold hover:bg-secondary-dark transition duration-300">
        Apadrinar Ahora
      </button>
    </div>
  );
}

export default Sponsorship;
