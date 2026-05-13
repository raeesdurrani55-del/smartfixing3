import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
};

export function PageShell({ children, title }: Props) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-600">SmartFixing</h1>
          <nav className="flex gap-6 text-sm">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/services" className="hover:text-blue-600">Services</a>
            <a href="/warranty" className="hover:text-blue-600">Warranty</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center text-sm">
        © 2026 SmartFixing Dubai - All Rights Reserved
      </footer>
    </div>
  );
}

export default PageShell;
