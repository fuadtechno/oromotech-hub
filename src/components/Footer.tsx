import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-8">
          {/* Logo fi Slogan */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-white text-2xl font-extrabold tracking-tight">
              OromoTech <span className="text-green-500">Hub</span>
            </h2>
            <p className="text-sm mt-2 max-w-xs">
              Ogummaa teknoolojii ammayyaa Afaan Oromootiin baradhuu jireenya kee jijjiiri.
            </p>
          </div>

          {/* Links Quick Access */}
          <div className="flex space-x-8 text-sm font-medium">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-xs">
          <p>
            © {new Date().getFullYear()} OromoTech Hub. Senior Project.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span>Made with ❤️ for the Oromo Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
}