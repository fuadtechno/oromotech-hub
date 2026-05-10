export default function Page() {
  return (
    <div className="min-h-screen w-full bg-white">

      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            About Us
          </h1>
          <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg">
            Learn modern web development with OromoTech Hub
          </p>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-8 items-center">

          {/* Left */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/about.jpg"
              alt="about"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Build Your Future
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We provide structured courses in HTML, CSS, JavaScript, React, and Backend development.
              Everything is designed to be mobile-friendly and beginner friendly.
            </p>

            {/* Button */}
            <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Start Learning
            </button>
          </div>

        </div>

        {/* Grid Section */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="p-5 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">HTML</h3>
            <p className="text-sm text-gray-600">Structure of the web</p>
          </div>

          <div className="p-5 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">CSS</h3>
            <p className="text-sm text-gray-600">Design and styling</p>
          </div>

          <div className="p-5 border rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold">JavaScript</h3>
            <p className="text-sm text-gray-600">Logic and interactivity</p>
          </div>

        </div>

      </div>
    </div>
  );
}