export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-balance leading-tight">
          Teknik Xidmətlərdə <span className="text-primary">Sənə Güvən</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
          Can Servis olaraq biz kompyuter, telefon, printer təmiri, proqram yazılımı, kamera quraşdırılması və
          aksesuarlar satışı üzrə ən keyfiyyətli xidmətləri təqdim edirik.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg transition transform hover:scale-105">
            Xidmət Talebi Et
          </button>
          <button className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-lg font-semibold text-lg transition">
            Daha Ətraflı
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
            <p className="text-2xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">Məmnun Müştəri</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
            <p className="text-2xl font-bold text-primary">10+ Yıl</p>
            <p className="text-sm text-muted-foreground">Təcrübə</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-border">
            <p className="text-2xl font-bold text-accent">24/7</p>
            <p className="text-sm text-muted-foreground">Dəstək</p>
          </div>
        </div>
      </div>
    </section>
  )
}
