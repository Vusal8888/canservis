"use client"

import type React from "react"

import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">
            Bizimlə <span className="text-primary">Əlaqə Saxlayın</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">Hər hansı sualınız varsa, biz həmişə yardımıya hazırıq</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Telefon</h3>
                <p className="text-muted-foreground">+994 (12) 123-45-67</p>
                <p className="text-muted-foreground">+994 (70) 123-45-67</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">E-mail</h3>
                <p className="text-muted-foreground">info@canservis.az</p>
                <p className="text-muted-foreground">support@canservis.az</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Ünvan</h3>
                <p className="text-muted-foreground">Bakı, Nizami rayonu</p>
                <p className="text-muted-foreground">28 May küçəsi, Azərbaycan</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Çalışma Saatları</h3>
                <p className="text-muted-foreground">Bazar-cuma: 09:00 - 18:00</p>
                <p className="text-muted-foreground">Şənbə: 10:00 - 16:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-background to-muted p-8 rounded-xl border border-border"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Adınız</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Adınız"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="E-mail"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Telefon nömrəsi"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mesaj</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Məsələn qısa təsviri yazın..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition"
              >
                Mesaj Göndər
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
