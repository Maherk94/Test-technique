import Link from "next/link";

interface CardProps {
  title: string;
  link: string;
  bgColor: string;
  icon: string;
}

export default function Card({ title, link, bgColor, icon }: CardProps) {
  return (
    <Link href={link} className="block">
      <div
        className={`${bgColor} shadow-lg rounded-lg p-8 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1`}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
          <span className="text-white text-4xl">{icon}</span>
        </div>
        <p className="text-gray-100 mt-2">Click to view {title}</p>
      </div>
    </Link>
  );
}
