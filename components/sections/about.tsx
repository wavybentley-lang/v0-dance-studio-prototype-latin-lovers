"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type AboutSectionProps = {
  isVisible: boolean
  setSectionRef: (id: string, element: HTMLElement | null) => void
  bioOpen: boolean
  setBioOpen: (open: boolean) => void
}

export function AboutSection({ isVisible, setSectionRef }: AboutSectionProps) {
  const imageRef = useRef<HTMLDivElement>(null)
  const [imageScale, setImageScale] = useState(false)

  useEffect(() => {
    if (!imageRef.current) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setImageScale(true); observer.disconnect() } },
      { threshold: 0.3 },
    )
    observer.observe(imageRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="chi-siamo"
      ref={(element) => setSectionRef("chi-siamo", element)}
      style={{ background: "radial-gradient(ellipse at 20% 60%, #161616 0%, #111111 60%, #0A0A0A 100%)" }}
      className={`bg-card py-20 transition-all duration-700 sm:py-28 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div
            ref={imageRef}
            className={`transition-transform duration-1000 ${imageScale ? "scale-105" : "scale-100"}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[34rem] overflow-hidden rounded-sm border border-border bg-secondary">
              <Image src="/latinlovers/chisiamo.jpg" alt="Napoli Danza chi siamo" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
          <div className="mx-auto flex max-w-xl flex-col justify-center self-center lg:mx-0 lg:py-6">
            <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-primary uppercase">CHI SIAMO</p>
            <h2 className="mb-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">Latin Lovers Dance nasce dalla passione per il ballo latino</h2>
            <div className="space-y-4 text-lg leading-relaxed text-pretty text-foreground">
              <p>Latin Lovers Dance nasce dalla passione per il ballo latino e dal desiderio di creare un luogo dove ogni persona possa sentirsi a proprio agio, divertirsi e crescere attraverso la danza.</p>
              <p>La nostra scuola accoglie principianti, appassionati e ballerini pi&ugrave; esperti che vogliono imparare Salsa Cubana, Bachata e Kizomba in un ambiente dinamico, coinvolgente e ricco di energia positiva. Crediamo che il ballo sia molto pi&ugrave; di una semplice attivit&agrave;: &egrave; un modo per esprimersi, fare nuove amicizie, migliorare la propria sicurezza e condividere emozioni autentiche.</p>
              <p>Attraverso corsi di gruppo, lezioni individuali e percorsi dedicati alle coppie, accompagniamo ogni allievo passo dopo passo, rispettando il suo livello e i suoi obiettivi. Le nostre lezioni combinano tecnica, musicalit&agrave; e divertimento, permettendo a tutti di imparare in modo naturale e coinvolgente.</p>
              <p>Che tu voglia muovere i primi passi o perfezionare il tuo stile, da Latin Lovers Dance troverai una comunit&agrave; pronta ad accoglierti e a farti vivere tutta la magia del mondo latino.</p>
              <div className="pt-4">
                <h3 className="mb-3 font-serif text-2xl font-bold text-foreground">La Nostra Missione</h3>
                <p>Trasmettere la passione per il ballo latino creando un ambiente accogliente, inclusivo e stimolante, dove ogni persona possa imparare, divertirsi e sentirsi parte di una grande famiglia.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
