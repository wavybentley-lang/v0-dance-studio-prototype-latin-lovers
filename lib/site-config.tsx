import {
  Calendar,
  CalendarRange,
  Crown,
  Flame,
  Heart,
  Star,
  Tag,
  Ticket,
  Users,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type NavLink = {
  href: string
  label: string
}

export type Course = {
  title: string
  age: string
  description: string
  image: string
  Icon: LucideIcon
}

export type CourseCategory = {
  label: string
  courses: Course[]
}

export type ScheduleDay = {
  day: string
  classes: {
    time: string
    name: string
  }[]
}

export type TeamMember = {
  photo: string
  name: string
  role: string
  bio: string
}

export const brand = {
  name: "Latin Lovers Dance",
  shortName: "Latin Lovers Dance",
  tagline: "Vivi il ritmo, scopri la passione del ballo latino.",
  logo: "",
  phone: "+39 327 446 2247",
  phoneHref: "tel:+393274462247",
  whatsappHref: "https://wa.me/393274462247",
  email: "ltnloversgmail.com",
  emailHref: "mailto:ltnloversgmail.com",
  instagramHref: "https://www.instagram.com/vox_mundi_napoli/",
  facebookHref: "https://www.facebook.com/LatinLoversDance",
  mapsHref: "https://maps.google.com/?q=Latin+Lovers+Dance+Montoro",
  primaryLocation: "Latin Lovers Dance Montoro",
  secondaryLocation: "Montoro",
  cityLine: "Italy",
  hours:
    "Luned\u00ec: 18:00-22:30\n" +
    "Marted\u00ec: 18:00-22:30\n" +
    "Mercoled\u00ec: 18:00-22:30\n" +
    "Gioved\u00ec: 19:00-23:30\n" +
    "Venerd\u00ec: Chiuso\n" +
    "Sabato: Chiuso\n" +
    "Domenica: Chiuso",
  copyright: " 2026 Latin Lovers Dance",
}

export const navLinks: NavLink[] = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#corsi", label: "Corsi" },
  { href: "#orari", label: "Orari" },
  { href: "#prezzi", label: "Prezzi" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contatti", label: "Contatti" },
]

export const stats = [
  { number: "10+", label: "DISCIPLINE" },
  { number: "DAI 3 ANNI", label: "BAMBINI, RAGAZZI E ADULTI" },
  { number: "2", label: "SPETTACOLI ALLANNO" },
  { number: "CORSI", label: "BASE E AVANZATI" },
]

export const courseCategories: CourseCategory[] = [
  {
    label: "Dance",
    courses: [
      {
        title: "Postura",
        age: "Tutti i livelli",
        description: "Tecnica, postura e disciplina per costruire basi solide nella danza classica.",
        image: "/latinlovers/pexels-166597582-12327994.jpg",
        Icon: Zap,
      },
      {
        title: "Tecnica di Base",
        age: "Tutti i livelli",
        description: "Movimento, ritmo ed espressivita per interpretare coreografie moderne con energia.",
        image: "/latinlovers/pexels-pixabay-270789.jpg",
        Icon: Flame,
      },
      {
        title: "Regole del Tango",
        age: "Tutti i livelli",
        description: "Allenamento controllato per postura, tonificazione, stabilita e consapevolezza corporea.",
        image: "/latinlovers/pexels-stella-giordano-56317708-28434182.jpg",
        Icon: Wind,
      },
    ],
  },
]

export const featuredGalleryPhotos: { src: string; alt: string }[] = [
  { src: "/latinlovers/nostrimomenti.jpg", alt: "Napoli Danza momento in sala" },
  { src: "/latinlovers/nostrimomenti2.jpg", alt: "Napoli Danza gruppo danza" },
  { src: "/latinlovers/nostrimomenti3.jpg", alt: "Napoli Danza lezione di danza" },
]

export const allGalleryPhotos = [
  "/group_outside_.jpg", "/inside_school_children_lesson.jpg", "/male_female_duo.jpg",
  "/outside_event_students.jpg", "/solo_female_air_dance.jpg", "/student_green_dress.jpg",
  "/air_dance_student.jpg", "/collage_children_group.jpg", "/group_male_female_stuends_stage.jpg",
  "/IMG_8356.JPG.webp", "/IMG_8357.JPG.webp", "/IMG_8359.JPG.webp", "/IMG_8360.JPG.webp",
  "/IMG_8363.JPG.webp", "/IMG_8364.JPG.webp", "/IMG_8367.JPG.webp", "/IMG_8368.JPG.webp",
  "/IMG_8369.JPG.webp", "/IMG_8370.JPG.webp", "/IMG_8371.JPG.webp", "/IMG_8373.JPG.webp",
  "/IMG_8377.JPG.webp", "/IMG_8378.JPG.webp", "/IMG_8379.JPG.webp", "/IMG_8380.JPG.webp",
  "/IMG_8382.JPG.webp", "/IMG_8383.JPG.webp", "/IMG_8385.JPG.webp", "/IMG_8387.JPG.webp",
  "/IMG_8390.JPG.webp", "/IMG_8396.JPG.webp", "/IMG_8402.JPG.webp", "/IMG_8413.webp",
  "/additional/saggio-ateneo-agropoli-1.webp", "/additional/saggio-ateneo-agropoli-2.webp",
  "/additional/performance-ateneo-agropoli.webp", "/additional/spettacolo-fine-anno-ateneo-1.webp",
  "/additional/spettacolo-fine-anno-ateneo-3.webp", "/additional/spettacolo-fine-anno-ateneo.webp",
  "/additional/danza-femminile-sedia-agropoli.webp", "/additional/female-perform-sitting-chair.webp",
  "/additional/female-solo.webp", "/additional/females-group-perform.webp",
  "/additional/females-perform-stage.webp", "/additional/females-performs3.webp",
  "/additional/group-performance-4.webp", "/additional/group-performance-all-black.webp",
  "/additional/groupd-perform-1.webp", "/additional/kid-perform-solo.webp",
  "/additional/kid-solo-performance.webp", "/additional/kids-group-performance.webp",
  "/additional/kids-performance.webp", "/additional/kids-performance1.webp",
  "/additional/m-f-performa1.webp", "/additional/male-dancer.webp",
  "/additional/male-fdemale-performance4.webp", "/additional/male-female-ballet-1.webp",
  "/additional/coppia-balletto-ateneo-agropoli.webp",
  "/additional/coppia-balletto-ateneo-agropoli-3.webp",
  "/additional/duo-danza-ateneo-agropoli.webp", "/additional/gruppo-misto-performance-ateneo.webp",
  "/additional/coppia-performance-ateneo-cilento.webp",
  "/additional/coppia-danza-moderna-agropoli.webp",
  "/additional/coppia-danza-moderna-agropoli-1.webp",
  "/additional/coppia-danza-moderna-agropoli-2.webp",
  "/additional/coppia-danza-moderna-agropoli-4.webp",
  "/additional/coppia-performance-palcoscenico-1.webp",
  "/additional/coppia-performance-palcoscenico-2.webp",
  "/additional/coppia-performance-palcoscenico-3.webp",
  "/additional/coppia-danza-ateneo.webp", "/additional/gruppo-misto-danza-ateneo-3.webp",
  "/additional/danzatore-performance-agropoli-2.webp",
  "/additional/danzatore-solo-ateneo-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli.webp",
  "/additional/danzatore-solo-palcoscenico-agropoli-1.webp",
  "/additional/duo-misto-performance-ateneo.webp",
  "/additional/uomo-danza-performance-agropoli.webp",
  "/additional/performance-danza-ateneo-agropoli.webp",
  "/additional/due-ragazze-palcoscenico-ateneo.webp",
  "/additional/donna-danza-performance-agropoli-3.webp",
  "/additional/donna-danza-rosso-ateneo-agropoli.webp",
  "/additional/donne-performance-ateneo-agropoli-2.webp",
]

export const salaArmoniaSchedule: ScheduleDay[] = [
  {
    day: "LUNED\u00cc",
    classes: [
      { time: "10:00-11:00", name: "Salsa Cubana" },
      { time: "11:00-12:00", name: "Bachata" },
      { time: "14:00-15:00", name: "Kizomba" },
      { time: "17:00-18:00", name: "Caraibico Base" },
      { time: "19:00-20:00", name: "Caraibico Intermedio" },
      { time: "20:30-21:30", name: "Caraibico Avanzato" },
      { time: "21:30-22:30", name: "Corso Coppia" },
      { time: "22:30-23:30", name: "Corso Donna" },
    ],
  },
  {
    day: "MARTED\u00cc",
    classes: [
      { time: "12:00-13:00", name: "Corso Uomo" },
      { time: "14:00-15:00", name: "Lezione Privata" },
      { time: "17:00-18:00", name: "Salsa Cubana" },
      { time: "18:00-19:00", name: "Bachata" },
      { time: "19:30-20:30", name: "Kizomba" },
      { time: "20:30-21:30", name: "Caraibico Base" },
      { time: "21:30-22:30", name: "Caraibico Intermedio" },
      { time: "22:30-23:30", name: "Caraibico Avanzato" },
    ],
  },
  {
    day: "MERCOLED\u00cc",
    classes: [
      { time: "11:30-12:30", name: "Corso Coppia" },
      { time: "14:00-15:00", name: "Corso Donna" },
      { time: "16:00-17:00", name: "Corso Uomo" },
      { time: "18:00-19:00", name: "Lezione Privata" },
      { time: "19:00-20:00", name: "Salsa Cubana" },
      { time: "20:30-21:30", name: "Bachata" },
      { time: "21:30-22:30", name: "Kizomba" },
    ],
  },
  {
    day: "GIOVED\u00cc",
    classes: [
      { time: "10:00-11:00", name: "Caraibico Base" },
      { time: "11:00-12:00", name: "Caraibico Intermedio" },
      { time: "14:00-15:00", name: "Caraibico Avanzato" },
      { time: "17:00-18:00", name: "Corso Coppia" },
      { time: "18:30-19:30", name: "Corso Donna" },
      { time: "19:30-20:30", name: "Corso Uomo" },
      { time: "20:30-21:30", name: "Lezione Privata" },
      { time: "21:30-22:30", name: "Salsa Cubana" },
      { time: "22:30-23:30", name: "Bachata" },
    ],
  },
  {
    day: "VENERD\u00cc",
    classes: [
      { time: "14:00-15:00", name: "Kizomba" },
      { time: "18:00-19:00", name: "Caraibico Base" },
      { time: "19:00-20:00", name: "Caraibico Intermedio" },
      { time: "20:00-21:00", name: "Caraibico Avanzato" },
      { time: "21:00-22:00", name: "Corso Coppia" },
      { time: "22:00-23:00", name: "Corso Donna" },
    ],
  },
  {
    day: "SABATO",
    classes: [
      { time: "11:00-12:00", name: "Corso Uomo" },
      { time: "15:30-16:30", name: "Lezione Privata" },
      { time: "17:00-18:00", name: "Salsa Cubana" },
    ],
  },
  {
    day: "DOMENICA",
    classes: [{ time: "10:00-12:30", name: "Bachata" }],
  },
]

export const salaRitmoSchedule = salaArmoniaSchedule

export const scheduleBookingServices = [
  "Salsa Cubana",
  "Bachata",
  "Kizomba",
  "Caraibico Base",
  "Caraibico Intermedio",
  "Caraibico Avanzato",
  "Corso Coppia",
  "Corso Donna",
  "Corso Uomo",
  "Lezione Privata",
]

export const scheduleContactInfo = {
  address: "Latin Lovers Dance Montoro, Montoro, Italy",
  phone: "+39 327 446 2247",
}

export const pricingCards = [
  { Icon: Ticket, title: "Lezione Singola", description: "Ideale per provare un corso prima di iscriverti. Nessun impegno, massima flessibilitÃ ." },
  { Icon: Calendar, title: "Abbonamento Mensile", description: "La soluzione piÃ¹ flessibile per chi vuole ballare con regolaritÃ  ogni mese." },
  { Icon: CalendarRange, title: "Abbonamento Semestrale", description: "Sei mesi di lezioni con un risparmio rispetto all'abbonamento mensile." },
  { Icon: Crown, title: "Abbonamento Annuale", description: "La scelta di chi vuole dare continuitÃ  al proprio percorso artistico. Massimo risparmio." },
]

export const pricingHighlights = [
  { Icon: Tag, title: "Tariffe Differenziate", description: "I costi variano in base al corso scelto e all'etÃ  dell'allievo. Contattaci per ricevere il preventivo personalizzato." },
  { Icon: Users, title: "Sconti Famiglia", description: "Sono previste riduzioni speciali per fratelli e/o sorelle e per mamme e figlie che si iscrivono insieme." },
]
