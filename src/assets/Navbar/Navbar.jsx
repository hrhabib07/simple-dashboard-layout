const Navbar = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-1/6 bg-gray-200 border-r border-gray-600 p-4 flex items-center justify-center">
        <p>Navbar</p>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 p-4">
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="border border-gray-500 h-60 flex items-center justify-center"
            >
              hello
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Navbar;
