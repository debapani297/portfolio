export const Header = () => {
  return ( 
  <div className="flex justify-center items-center relative top-3">
    <nav className="flex gap-0.5 p-0.5 text-sm border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#" className="nav-item px-2 py-1 text-sm">
        Home
      </a>
      <a href="#about" className="nav-item px-2 py-1 text-sm">
        About
      </a>
      <a href="#Experience" className="nav-item px-2 py-1 text-sm">
      Experience
      </a>
      <a href="#Contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900 px-2 py-1 text-sm">
        Contact
      </a>
    </nav>
  </div>);
};
