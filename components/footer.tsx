import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Can Servis</h4>
            <p className="text-sm opacity-75">
              Texniki xidmətlərdə sənə güvən. 10+ illik təcrübə ilə bizimlə əlaqə saxla.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Xidmətlər</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Kompyuter Təmiri
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Telefon Təmiri
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Printer Təmiri
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Kamera Quraşdırması
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Şirkət</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Haqqımızda
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Əlaqə
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Qaydalar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-100 transition">
                  Gizlilik
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Əlaqə</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li>info@canservis.az</li>
              <li>+994 (12) 123-45-67</li>
              <li>Bakı, Nizami rayonu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">&copy; 2025 Can Servis. Bütün hüquqlar qorunur.</p>
        </div>
      </div>
    </footer>
  )
}
