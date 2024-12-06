import data from "@/data.json";
import Link from "next/link";

const AnimalsPage = () => {
  const animals = data.animals;

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-8">
      <h1 className="text-4xl font-bold mb-6 text-green-600 border-b-2 pb-4">
        List of animals
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 list-disc list-inside">
        {animals.map((animal) => (
          <li key={animal.id} className="text-gray-700 text-lg my-2">
            <Link
              href={`/animals/${animal.id}`}
              className="hover:text-green-600"
            >
              {animal.name}{" "}
              <span className="text-gray-500">({animal.species})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalsPage;
