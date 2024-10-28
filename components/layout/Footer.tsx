import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm text-gray-400">ProDirectory connects you with top professionals in various fields to help you make informed decisions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-purple-400">Home</Link></li>
              <li><Link href="#" className="hover:text-purple-400">Services</Link></li>
              <li><Link href="#" className="hover:text-purple-400">About</Link></li>
              <li><Link href="#" className="hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-400">Email: info@prodirectory.com</p>
            <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          © 2024 ProDirectory. All rights reserved.
        </div>
      </div>
    </footer>
  );
}