function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-indigo-500 bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        
        {/* Left Side */}
        <div className="flex items-center gap-4">

          {/* Logo */}
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-3xl backdrop-blur">
            📝
          </div>

          {/* Title & Subtitle */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              Todo List
            </h1>

            <p className="text-sm text-indigo-100">
              Organize your daily tasks efficiently.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur md:flex">
          <span className="text-base">⚛️</span>
          <span>React + Tailwind</span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;