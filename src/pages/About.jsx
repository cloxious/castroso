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
          Amor y Abrigo es un refugio de animales sin fines de lucro fundado en
          2010 en San Pedro Sula, Honduras, por un grupo de amantes de los
          animales comprometidos con el bienestar de las mascotas abandonadas y
          maltratadas. Nuestra misión es proporcionar un hogar temporal seguro y
          amoroso para estos animales, mientras trabajamos incansablemente para
          encontrarles hogares permanentes y cariñosos en nuestra comunidad
          local.
        </p>
        <h2 className="text-2xl font-semibold text-primary-dark">
          Nuestra Historia
        </h2>
        <p className="text-text">
          Todo comenzó cuando nuestros fundadores rescataron a un grupo de
          perros abandonados en las afueras de la ciudad. Al darse cuenta de la
          magnitud del problema de animales sin hogar, decidieron crear un
          espacio donde estos seres indefensos pudieran recibir el cuidado y el
          amor que merecen.
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
