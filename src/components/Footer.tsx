export default function Footer() {
  return (
    <footer className="bg-copper-900 text-copper-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Stop<span className="text-copper-400">Shops</span></h3>
          <p className="text-copper-200">
            Exporting premium quality Indian Bartan to the international market.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-copper-200 hover:text-white transition-colors">Home</a></li>
            <li><a href="/about" className="text-copper-200 hover:text-white transition-colors">How We Do It</a></li>
            <li><a href="/contact" className="text-copper-200 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-copper-200">Email: export@stopshops.com</p>
          <p className="text-copper-200">Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-copper-800 text-center text-copper-300">
        <p>&copy; {new Date().getFullYear()} StopShops. All rights reserved.</p>
      </div>
    </footer>
  );
}
