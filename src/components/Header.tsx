interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">Единое Начало</div>
        <nav className="flex items-center gap-8">
          <a
            href="/about"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            О центре
          </a>
          <a
            href="tel:+79960050806"
            className="text-white bg-teal-700 hover:bg-teal-800 transition-colors duration-300 uppercase text-sm px-4 py-2 font-semibold tracking-wide"
          >
            +7 996 005-08-06
          </a>
        </nav>
      </div>
    </header>
  );
}