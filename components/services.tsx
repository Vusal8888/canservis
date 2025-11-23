import { Cpu, Code, Printer, Smartphone, Camera, ShoppingBag } from "lucide-react"

const services = [
  {
    icon: Cpu,
    title: "Kompyuter Təmiri",
    description:
      "Hardware və software problemləri tez şəkildə həll edirik. İşletim sistemi quraşdırması, hard disk dəyişdirilməsi və s.",
  },
  {
    icon: Code,
    title: "Proqram Yazılımı",
    description:
      "Biznes üçün xüsusi yazılım həllləri hazırlayırıq. Mobil app, veb platformalar və idarəetmə sistemləri.",
  },
  {
    icon: Printer,
    title: "Printer Təmiri",
    description: "Bütün markalar printer xidməti veririk. Ink dolması, komponent dəyişdirilməsi və texniki dəstək.",
  },
  {
    icon: Smartphone,
    title: "Telefon Təmiri",
    description: "Ekran, batareya, mikrofon və digər komponentlərin təmiri. Orijinal ehtiyat hissələr istifadə edirik.",
  },
  {
    icon: Camera,
    title: "Kamera Quraşdırması",
    description: "Müşahidə kameraları quraşdırması və konfiqurasiyası. Professional konsultasiya və destek.",
  },
  {
    icon: ShoppingBag,
    title: "Telefon Aksesuarları",
    description: "Keyfiyyətli telefon aksesuarları satışı. Ekran protektoru, çexol, şarj cihazı və daha çoxu.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Bizim <span className="text-primary">Xidmətlər</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Geniş xidmət spektriniz sayəsində bütün texniki problemlərinizi bir yerdə həll edə bilərik
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-background to-muted p-8 rounded-xl border border-border hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
