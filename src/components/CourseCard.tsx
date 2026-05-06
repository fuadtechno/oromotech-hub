import Link from 'next/link';

interface CourseProps {
  title: string;
  desc: string;
  link: string;
  icon: string;
}

export default function CourseCard({ title, desc, link, icon }: CourseProps) {
  return (
    <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-xl group-hover:text-green-600 transition">{title}</h3>
      <p className="text-sm text-gray-500 mt-2 leading-relaxed">{desc}</p>
      <Link href={link} className="mt-4 inline-flex items-center text-green-600 font-bold">
        Jalqabi <span className="ml-1 group-hover:translate-x-1 transition">→</span>
      </Link>
    </div>
  );
}