import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';

export default function Home() {
  // Koorsiiwwan fuula duraa irratti mul'atan
  const topCourses = [
    { title: "HTML Basics", desc: "Caasaa weebsaayitii ijaaruu baradhu.", link: "/courses/1", icon: "🌐" },
    { title: "CSS Fundamentals", desc: "Weebsaayitii kee dizaayiniin bareechi.", link: "/courses/2", icon: "🎨" },
    { title: "JavaScript Basics", desc: "Weebsaayitii kee socho'aa taasisi.", link: "/courses/3", icon: "⚡" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* 1. NAVBAR - Component irraa dhufe */}
      <Navbar />

      {/* 2. HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-green-50 to-white">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
          Afaan Oromootiin <br /> <span className="text-green-600">Teknoolojii Baradhu</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
          OromoTech Hub waliin ogummaa koodingii fi dizaayinii Afaan Oromootiin baradhu.
          Jireenya kee kallaattii haaraatti jijjiiri.
        </p>

        <Link
          href="/signup"
          className="mt-8 bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-200 hover:scale-105 transform transition"
        >
          Barumsa Jalqabi
        </Link>
      </section>

      {/* 3. TOP COURSES SECTION */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800">🔥 Koorsiiwwan Beekamoo</h2>
          <Link href="/courses" className="text-green-600 font-semibold hover:underline">Hunda ilaali →</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topCourses.map((course, i) => (
            <CourseCard 
              key={i} 
              title={course.title} 
              desc={course.desc} 
              link={course.link} 
              icon={course.icon} 
            />
          ))}
        </div>
      </section>

      {/* 4. WHY US SECTION */}
      <section className="px-6 py-20 bg-green-600 text-white text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Maaliif Nu Filattu?</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-4xl mb-2">🌍</div>
              <h4 className="text-xl font-bold">Afaan Oromoo</h4>
              <p className="mt-2 text-green-100">Barumsa teknoolojii afaan dhaloota keetiin salphatti baradhu.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🛠️</div>
              <h4 className="text-xl font-bold">Hojii Qabatamaa</h4>
              <p className="mt-2 text-green-100">Ti'oorii qofa miti, pirojektoota qabatamaa irratti hojjatta.</p>
            </div>
            <div>
              <div className="text-4xl mb-2">🎓</div>
              <h4 className="text-xl font-bold">Namoota Jalqabaaf</h4>
              <p className="mt-2 text-green-100">Beekumsa kanaan duraa tokko malee qajeelfama gahaa ni argatta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER - Component irraa dhufe */}
      <Footer />

    </div>
  );
}