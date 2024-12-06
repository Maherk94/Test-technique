import data from "@/data.json";
import { type Animal } from "@/types";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

const AnimalDetail = async ({ params }: { params: Params }) => {
  const pageParams = await params;
  const id = pageParams.id;

  const animal = data.animals.find((e: Animal) => e.id === Number(id));

  if (!animal) return notFound();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{animal.name}</h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Species:</span> {animal.species}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Date of birth: </span>
        {animal.dateOfBirth}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Breed:</span> {animal.breed}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Color:</span> {animal.color}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Weight:</span> {animal.weight} grams
      </p>
    </div>
  );
};

export default AnimalDetail;
