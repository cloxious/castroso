import { useState } from "react";
import usePageTitle from "../hooks/usePageTitle";

function Gallery() {
  usePageTitle("Fotogalería");
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0046.jpg?bwg=1675131188",
      alt: "Perros",
    },
    {
      id: 2,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0041.jpg?bwg=1675131188",
      alt: "Campaña Desparasitación",
    },
    {
      id: 3,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0039.jpg?bwg=1675131188",
      alt: "Alimentación",
    },
    {
      id: 4,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0040.jpg?bwg=1675131188",
      alt: "Peluditos",
    },
    {
      id: 5,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0035.jpg?bwg=1675131188",
      alt: "Santuario de Sam",
    },
    {
      id: 6,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0033.jpg?bwg=1675131188",
      alt: "Donaciones",
    },
    {
      id: 7,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0033.jpg?bwg=1675131188",
      alt: "Donaciones",
    },
    {
      id: 8,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0029.jpg?bwg=1675131188",
      alt: "Adopción",
    },
    {
      id: 9,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0031.jpg?bwg=1675131188",
      alt: "Adopción",
    },
    {
      id: 10,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0025.jpg?bwg=1675131188",
      alt: "Adopción",
    },
    {
      id: 11,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0028.jpg?bwg=1675131188",
      alt: "Adopción",
    },
    {
      id: 12,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0019.jpg?bwg=1675131188",
      alt: "Peluditos",
    },
    {
      id: 13,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0021.jpg?bwg=1675131188",
      alt: "Perritos",
    },
    {
      id: 14,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0015.jpg?bwg=1675131188",
      alt: "Gatitos",
    },
    {
      id: 15,
      src: "https://amoryabrigo.org/wp-content/uploads/photo-gallery/IMG-20230130-WA0016.jpg?bwg=1675131188",
      alt: "Gatitos",
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
