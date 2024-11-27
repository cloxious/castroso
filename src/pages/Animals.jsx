import usePageTitle from "../hooks/usePageTitle";
import AnimalCard from "../components/AnimalCard";


function Animals() {
  usePageTitle("Nuestros Peluditos");

  const animals = [
    {
      name: "Nina",
      species: "Perro",
      image:
        "https://amoryabrigo.org/wp-content/uploads/2023/03/perrito-1.png",
      description:
        "Desde muy pequeña, fue una perrita muy juguetona hasta que sufrió el dolor de no ser querida y ser golpeada. Nina es una sobreviviente del maltrato y la maldad del hombre, fue lastimada a pesar de ser una perrita llena de amor y energia. Hoy en dia, es una peludita muy fuerte y sana gracias al apoyo de los angelitos de Amor y Abrigo.",
    },
    {
      name: "Canelo",
      species: "Perro",
      image:
        "https://amoryabrigo.org/wp-content/uploads/2023/03/canelo1-e1678858635489.png",
      description:
        "Canelo es un perrito que al igual que muchos otros animalitos tuvo una vida dificil, su anterior dueño lo lastimo con un machete e incluso lo dejaba pasar hambre y tenia que buscar alimento en la basura. Y no solo sufria por los maltratos sino tambien por una enfermedad, gracias al refugio Amor y Abrigo encontró un hogar y una familia que le da el amor que siempre debió recibir.",
    },
    {
      name: "Duquesa",
      species: "Perro",
      image:
        "https://amoryabrigo.org/wp-content/uploads/2023/03/duquesa3.png",
      description:
        "Duquesa es una perrita que tambien ha pasado por mucho, sus antiguos dueños la dejaron abandonada en un solar abandonado, pasando sol, hambre y sed. Aunque ella esperaba el regreso de ellos, entendió que la habian abandonado. Hasta que llegaron los corazones bondadosos de Amor y Abrigo. Rescatandola y ayudandole a sanar.",
    },
    {
      name: "Platanito",
      species: "Caballo",
      image:
        "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0034.jpg?bwg=1675131188",
      description:
        "Platanito es un caballo rescatado del maltrato de las personas, al igual que muchos caballos que han sido victimas de personas con un corazon malvado. Todos los caballos, yeguas y potrillos viven en el santuario de Sam, que se llama así en honor del primer caballo rescatado y que lastimosamente no pudo sobrevivir.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary-dark mb-6">
        Conoce Nuestros Peluditos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {animals.map((animal, index) => (
          <AnimalCard key={index} {...animal} />
        ))}
      </div>
    </div>
  );
}

export default Animals;
