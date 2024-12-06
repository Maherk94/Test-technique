import Card from "@/component/card";

export default function Home() {
  return (
    <div className="space-y-12">
      <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">
        Welcome to our site
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <Card
          title="Animals"
          link="/animals"
          bgColor="bg-green-500"
          icon="🐾"
        />
        <Card title="Persons" link="/persons" bgColor="bg-blue-500" icon="👥" />
      </div>
    </div>
  );
}
