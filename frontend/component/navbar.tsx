import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black w-full">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight hover:text-gray-200 transition duration-300"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}
