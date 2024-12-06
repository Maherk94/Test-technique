import data from "@/data.json";
import Link from "next/link";

const PersonsPage = () => {
  const persons = data.persons;

  return (
    <div className="bg-gray-100 shadow-lg rounded-lg p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-600 border-b-2 pb-4">
        List of persons
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 list-disc list-inside">
        {persons.map((person) => (
          <li key={person.id} className="text-gray-700 text-lg my-2">
            <Link
              href={`/persons/${person.id}`}
              className="hover:text-blue-600"
            >
              {person.firstName} {person.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonsPage;
