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
            <h2 className="mb-5 font-serif text-4xl font-bold text-foreground sm:text-5xl">Il punto di riferimento per il Tango Argentino a Napoli</h2>
            <div className="space-y-4 text-lg leading-relaxed text-pretty text-foreground">
              <p>Dal 2007 il Salone Margherita accompagna allievi e appassionati alla scoperta del Tango Argentino, diventando una realt&agrave; riconosciuta a Napoli e in Campania.</p>
              <p>Con insegnanti qualificati, un metodo didattico efficace e un ambiente accogliente, la scuola offre percorsi adatti a chi inizia da zero e a chi desidera perfezionare tecnica, musicalit&agrave; e interpretazione.</p>
              <p>Il tango &egrave; per tutti: non &egrave; necessario iscriversi in coppia e, fin dai primi mesi, gli allievi vengono accompagnati verso la pista con sicurezza e naturalezza.</p>
              <p>Tra lezioni, pratiche, serate ed eventi, il Salone Margherita &egrave; una vera comunit&agrave; dove vivere il Tango Argentino, condividere una passione e sentirsi parte di un luogo speciale nel cuore di Napoli.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
