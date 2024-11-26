function AnimalCard({ name, species, image, description }) {
  return (
    <div className="bg-white rounded-none border border-primary shadow-md overflow-hidden">
      <img
        src={image}
        alt={`${name}, ${species}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{species}</p>
        <p className="text-gray-700">{description}</p>
        <button className="mt-4 bg-secondary text-white px-4 py-2 rounded-none border border-primary-dark font-semibold hover:bg-secondary-dark transition duration-300">
          Adoptar
        </button>
      </div>
    </div>
  );
}

export default AnimalCard;
