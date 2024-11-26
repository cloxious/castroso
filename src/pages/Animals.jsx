import usePageTitle from "../hooks/usePageTitle";
import AnimalCard from "../components/AnimalCard";

function Animals() {
  usePageTitle("Nuestros Animales");

  const animals = [
    {
      name: "Luna",
      species: "Perro",
      image:
        "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Luna es una perrita cariñosa y juguetona de 2 años. Le encanta correr y jugar a la pelota.",
    },
    {
      name: "Milo",
      species: "Gato",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Milo es un gato tranquilo de 3 años. Disfruta de siestas al sol y mimos en el regazo.",
    },
    {
      name: "Rocky",
      species: "Perro",
      image:
        "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Rocky es un perro enérgico de 4 años. Es excelente con niños y le encanta hacer ejercicio.",
    },
    {
      name: "Nala",
      species: "Gato",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      description:
        "Nala es una gatita juguetona de 1 año. Le encanta trepar y explorar nuevos lugares.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary-dark mb-6">
        Nuestros Animales
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
