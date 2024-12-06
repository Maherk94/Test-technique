import data from "@/data.json";
import type { Person, Animal } from "@/types";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

const PersonDetail = async ({ params }: { params: Params }) => {
  const pageParams = await params;
  const id = pageParams.id;

  const person = data.persons.find((e: Person) => e.id === Number(id));
  const animals = data.animals.filter((e: Animal) => e.personId === Number(id));

  if (!person) return notFound();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">
        {person.firstName} {person.lastName}
      </h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Email:</span> {person.email}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Phone:</span> {person.phoneNumber}
      </p>
      <ul className="list-disc list-inside">
        {animals.map((animal) => (
          <li key={animal.id} className="text-gray-600">
            {animal.name}
            <span className="text-gray-400"> ({animal.species})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonDetail;
