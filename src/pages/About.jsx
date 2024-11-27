import usePageTitle from "../hooks/usePageTitle";

function About() {
  usePageTitle("Sobre Nosotros");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-dark mb-6">
        Sobre Amor y Abrigo
      </h1>
      <div className="space-y-6">
        <p className="text-text">
        La Fundación Amor y Abrigo es una organización sin fines de lucro dedicada a rescatar, proteger y dar una nueva oportunidad de vida a animales que han sido víctimas de abandono y maltrato en San Pedro Sula y sus alrededores.Desde nuestros inicios, hemos trabajado incansablemente para brindarles a estos seres inocentes un refugio seguro, alimentación, atención veterinaria y, sobre todo, mucho amor. Nuestra labor no solo se enfoca en la rehabilitación, sino también en encontrar hogares responsables donde puedan ser parte de una familia que los valore.
        </p>
        <h2 className="text-2xl font-semibold text-primary-dark">
          Nuestra Historia
        </h2>
        <p className="text-text">
        Amor y Abrigo nació en 2015 con el sueño de cambiar la vida de los animales abandonados en nuestra comunidad. Desde entonces, hemos rescatado a cientos de perros, gatos e incluso caballos, ofreciéndoles una segunda oportunidad para ser felices. Con el apoyo de voluntarios, donantes y familias adoptivas, seguimos expandiendo nuestra misión de amor y protección hacia aquellos que más lo necesitan.
        </p>
        <h2 className="text-2xl font-semibold text-primary-dark">
          Nuestro Equipo
        </h2>
        <p className="text-text">
          Contamos con un equipo dedicado de veterinarios, cuidadores y
          voluntarios que trabajan juntos para garantizar el bienestar de
          nuestros animales. Cada miembro de nuestro equipo aporta una pasión
          única por los animales y un compromiso inquebrantable con nuestra
          misión.
        </p>
        <h2 className="text-2xl font-semibold text-primary-dark">
          Nuestros Servicios
        </h2>
        <ul className="list-disc list-inside text-text">
          <li>
            Rescate y rehabilitación de animales abandonados y maltratados
          </li>
          <li>Programa de adopción responsable</li>
          <li>Servicios veterinarios para nuestros residentes</li>
          <li>Programas educativos sobre el cuidado responsable de mascotas</li>
          <li>Campañas de esterilización y castración</li>
        </ul>
        <h2 className="text-2xl font-semibold text-primary-dark">
          Nuestro Impacto
        </h2>
        <p className="text-text">
          Desde nuestra fundación, hemos rescatado y encontrado hogares para más
          de 5,000 animales. Trabajamos en estrecha colaboración con la
          comunidad local para educar sobre la importancia de la adopción y el
          cuidado responsable de las mascotas.
        </p>
        <p className="text-text">
          En Amor y Abrigo, creemos que cada animal merece una segunda
          oportunidad. Con tu apoyo, podemos continuar brindando amor, cuidado y
          esperanza a los animales que más lo necesitan.
        </p>
      </div>
    </div>
  );
}

export default About;
