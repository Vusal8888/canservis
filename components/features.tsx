import { CheckCircle2, Zap, Award, Users } from "lucide-react"

const features = [
  {
    icon: CheckCircle2,
    title: "Keyfiyyətli Xidmət",
    description: "Ən yüksək keyfiyyət standartlarına uyğun xidmət təminatı",
  },
  {
    icon: Zap,
    title: "Sürətli Xidmət",
    description: "Çoxu 24 saat içində problemlərini həll edirik",
  },
  {
    icon: Award,
    title: "Sertifikasiyalı Mütəxəssis",
    description: "Bütün personel yüksək səviyyədə eğitim almışdır",
  },
  {
    icon: Users,
    title: "Müştəri Dəstəyi",
    description: "24/7 professional dəstəq xidməti təqdim edirik",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Nə <span className="text-primary">Ayrı</span> Edir?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Can Servisdə siz ən yaxşı xidməti alırsınız</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
