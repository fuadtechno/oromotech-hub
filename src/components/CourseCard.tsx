import Link from 'next/link';

interface CourseProps {
  title: string;
  desc: string;
  link: string;
  icon: string;
}

export default function CourseCard({
  title,
  desc,
  link,
  icon,
}: CourseProps) {
  return (
    <Link
      href={link}
      className="group block bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Icon */}
      <div className="text-5xl mb-5 group-hover:scale-110 transition duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-black text-2xl text-gray-900 group-hover:text-emerald-600 transition">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-3 leading-7">
        {desc}
      </p>

      {/* Button */}
      <div className="mt-6 inline-flex items-center gap-2 text-emerald-600 font-black">
        Note Ilaali

        <span className="group-hover:translate-x-1 transition duration-300">
          →
        </span>
      </div>
    </Link>
  );
}