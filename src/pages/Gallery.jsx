import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

function Gallery() {
  usePageTitle("Fotogalería");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1415369629372-26f2fe60c467",
      alt: "Perro jugando en el parque",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13",
      alt: "Gato descansando en una ventana",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e",
      alt: "Perro y gato juntos",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba",
      alt: "Gato mirando a la cámara",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48",
      alt: "Perro corriendo en la playa",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5",
      alt: "Gatito durmiendo",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-primary-dark mb-6">Fotogalería</h1>
      <p className="text-text mb-8">
        Explora nuestra galería de fotos de los animales en nuestro refugio.
        Cada imagen cuenta una historia de esperanza y amor.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-none shadow-md"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-3xl max-h-full p-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
