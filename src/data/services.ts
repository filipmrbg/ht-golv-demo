export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'golvlaggning',
    title: 'Golvläggning',
    shortDescription: 'Professionell läggning av parkett, massiva trägolv, laminat och fiskbensparkett med millimeternoggrannhet.',
    heroText: 'Kvalitetsgolv lagda med yrkesstolthet i Stenungsund, Tjörn, Kungälv och Bohuslän.',
    detailedDescription: `Letar du efter en erfaren golvläggare i Stenungsund med omnejd? HT Golv i Stenungsund AB är ett familjeföretag i 3 generationer med djup kunskap inom alla typer av trä- och parkettgolv.

Vi utför allt från klassisk fiskbensparkett och massiva trägolv till moderna klickgolv och slitstarka laminatgolv. Vi lägger stor vikt vid noggrant förarbete, fuktspärrar och undergolv så att ditt nya golv håller sig vackert i generationer.`,
    heroImage: '/service-smahusbyggnation.webp',
    image: '/service-smahusbyggnation.webp',
    href: '/tjanster#golvlaggning',
    tag: 'Golvläggning',
    badge: '3 Generationer',
    highlights: [
      'Parkett, trägolv och fiskbensmönster',
      'Laminat och slitstarka vinylgolv',
      'Underarbete och fuktmätning',
      'ROT-avdrag 30 % direkt på fakturan',
    ],
    faq: [
      {
        question: 'Hur lång tid tar det att lägga ett parkettgolv?',
        answer: 'Ett normalstort rum eller våningsplan tar vanligtvis 1–3 arbetsdagar beroende på rummets utformning och undergolvets skick.',
      },
      {
        question: 'Hjälper ni till med val av golvmaterial?',
        answer: 'Självklart! Vi ger gärna rådgivning kring slitstyrka, träslag och ytbehandlingar anpassade efter hemmets slitage och stil.',
      },
    ],
  },
  {
    slug: 'mattlaggning',
    title: 'Mattläggning',
    shortDescription: 'Auktoriserad och certifierad läggning av plastmattor, linoleum, textilgolv och våtrumsmattor med täta svetsfogar.',
    heroText: 'Täta och hållbara mattor för badrum, tvättstuga, kontor och offentliga miljöer i Stenungsund.',
    detailedDescription: `Behöver du ny plastmatta i badrummet, slitstark linoleum i hallen eller textila golvplattor i kontorslokalen? HT Golv i Stenungsund AB är experter på professionell mattläggning och trådsvetsning.

Vi behärskar alla tekniker för fackmässig montering i både våtrum och torra utrymmen. Med precision i uppvik, hörn och fogsvetsning garanterar vi ett vattensäkert och estetiskt tilltalande resultat som tål hård belastning.`,
    heroImage: '/service-renovering.webp',
    image: '/service-renovering.webp',
    href: '/tjanster#mattlaggning',
    tag: 'Mattläggning',
    badge: 'Certifierat Våtrum',
    highlights: [
      'Våtrumsmatta i badrum och tvättstuga',
      'Plast- och linoleummattor',
      'Textilgolv och heltäckningsmattor för kontor',
      'Trådsvetsning och vattentäta uppvik',
    ],
    faq: [
      {
        question: 'Varför välja plastmatta i badrum?',
        answer: 'Plastmatta och våtrumstapet är ett av de mest vattensäkra och underhållsfria alternativen på marknaden, med minimal risk för fuktskador.',
      },
      {
        question: 'Kan man lägga plastmatta på befintligt golv?',
        answer: 'Underlaget måste vara helt jämnt, rent och torrt. Ofta rekommenderar vi primning och flytspackling för bästa resultat.',
      },
    ],
  },
  {
    slug: 'golvslipning',
    title: 'Golvslipning',
    shortDescription: 'Dammlös slipning, reparation och ytbehandling med lack, hårdvaxolja eller lut som väcker dina trägolv till liv.',
    heroText: 'Ge slitna trä- och parkettgolv nytt liv med professionell golvslipning i Stenungsund med omnejd.',
    detailedDescription: `Har ditt trägolv blivit repigt, gulnat eller slitet? Genom att slipa om golvet får du fram träets naturliga lyster och förlänger golvets livslängd avsevärt till en bråkdel av kostnaden för ett nytt golv.

HT Golv i Stenungsund AB slipar alla typer av trägolv med moderna, dammfria slipmaskiner. Därefter applicerar vi vald ytbehandling – matt lack, slitstark hårdvaxolja, olja eller pigmentering – anpassat efter dina önskemål och rummets belastning.`,
    heroImage: '/service-ombyggnation.webp',
    image: '/service-ombyggnation.webp',
    href: '/tjanster#golvslipning',
    tag: 'Golvslipning',
    badge: 'Dammfri Slipning',
    highlights: [
      'Dammfri slipning av parkett och plankgolv',
      'Lackering, hårdvaxolja och pigmentering',
      'Lagning av skador och stavbyte',
      'Trösklar, trappsteg och lister',
    ],
    faq: [
      {
        question: 'Hur många gånger kan ett parkettgolv slipas?',
        answer: 'Ett lamellparkettgolv med 3–4 mm slitskikt kan normalt slipas 2–4 gånger, medan ett massivt trägolv kan slipas ännu fler gånger.',
      },
      {
        question: 'Hur lång torktid behövs innan man kan gå på golvet?',
        answer: 'Vanligtvis kan golvet beträdas försiktigt efter 24 timmar, men full härdning tar cirka 5–7 dagar.',
      },
    ],
  },
  {
    slug: 'fastighetsforvaltning',
    title: 'Fastighetsförvaltning',
    shortDescription: 'Långsiktigt golvunderhåll och totalentreprenad för bostadsrättsföreningar, fastighetsägare och företag.',
    heroText: 'Trygg golventreprenad och förvaltning – en stabil samarbetspartner i 3 generationer.',
    detailedDescription: `För fastighetsägare, bostadsrättsföreningar och verksamheter erbjuder HT Golv i Stenungsund AB heltäckande lösningar inom golv och fastighetsskötsel.

Vi bistår med löpande underhållsplaner, lägenhetsrenoveringar vid avflyttning, golvbyten i trapphus och gemensamhetsutrymmen samt akuta åtgärder vid fuktskador. Som kund får du en pålitlig kontaktperson och ett samlat ansvar från besiktning till slutfört uppdrag.`,
    heroImage: '/service-totalentreprenad.webp',
    image: '/service-totalentreprenad.webp',
    href: '/tjanster#fastighetsforvaltning',
    tag: 'Fastighetsförvaltning',
    badge: 'Helhetsansvar',
    highlights: [
      'Golvbyten vid lägenhetsrenovering',
      'Trapphus, entréer och offentliga ytor',
      'Fuktsanering och återställning av golv',
      'Fast pris och tydliga tidsramar',
    ],
    faq: [
      {
        question: 'Arbetar ni mot både företag och bostadsrättsföreningar?',
        answer: 'Ja, vi har lång erfarenhet av samarbeten med BRF, fastighetsbolag och lokala företag i Stenungsund och Bohuslän.',
      },
      {
        question: 'Kan ni upprätta underhållsplaner för golv?',
        answer: 'Ja, vi besiktigar era ytor och lägger upp en långsiktig plan för när olika golv behöver underhållas eller bytas.',
      },
    ],
  },
];

export default services;
