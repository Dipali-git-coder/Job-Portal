export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left Info Panel */}
        <div className="bg-pink-400 text-white p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Let`s Talk 
            </h1>
            <p className="text-gray-300 mb-8">
              Have a question about jobs, internships, or this project?
              Drop a message and we will get back to you.
            </p>

            <div className="space-y-4 text-sm">
              <p> support@jobportal.dev</p>
              <p> India</p>
              <p> Built with Next.js</p>
            </div>
          </div>

          <p className="text-xs text-black-400">
            © {new Date().getFullYear()} Job Portal. All rights reserved.
          </p>
        </div>

        {/* Contact Form */}
        <div className="p-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Send us a message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:ring-1 focus:ring-black transition text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-black focus:ring-1 focus:ring-black transition text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us how we can help you..."
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:border-black focus:ring-1 focus:ring-black transition resize-none text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-black py-3 rounded-lg font-medium hover:bg-gray-900 active:scale-[0.98] transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
