import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-cyber-dark border-t border-green-900/20 py-8 circuit-overlay">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">hACKtTRONE</h3>
            <p className="text-gray-400 text-sm">
              The ultimate two-round hackathon to showcase your developipng skills and win amazing prizes.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-400 hover:text-green-400 transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link href="/problems" className="text-gray-400 hover:text-green-400 transition-colors">
                  Problems
                </Link>
              </li>
              <li>
                <Link href="/rules" className="text-gray-400 hover:text-green-400 transition-colors">
                  Rules
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Email: info@hackthrone2025.com</li>
              <li className="text-gray-400">Phone: +1 (123) 456-7890</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Instagram
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-green-900/20 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 HackTrone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}