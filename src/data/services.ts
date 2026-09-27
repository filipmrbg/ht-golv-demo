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
    slug: 'nybyggnation',
    title: 'Nybyggnation',
    shortDescription: 'Kundanpassade attefallshus, garage, förråd och fritidsboenden byggda i lösvirke från stabil grund till färdigt tak.',
    heroText: 'Förverkliga ditt nybygge i Grästorp och Skaraborg – från mark och stomme till färdigt hus.',
    detailedDescription: `Vill du bygga ett attefallshus, ett rymligt garage eller ett nytt fritidsboende? Hos Tengene Byggservice AB bygger vi i lösvirke efter dina exakta önskemål och mått.

Vi hjälper dig från idé till nyckelfärdigt bygge med stabil grund, täta konstruktioner och energieffektiva lösningar anpassade för det svenska klimatet.`,
    heroImage: '/service-smahusbyggnation.webp',
    image: '/service-smahusbyggnation.webp',
    href: '/tjanster#nybyggnation',
    tag: 'Nybyggnation',
    badge: 'Lösvirkesbygge',
    highlights: [
      'Skräddarsydda attefallshus och garage',
      'Fritidshus och förrådsbyggnader',
      'Gediget hantverk i lösvirke från grund till tak',
      'Hjälp med ritningar och bygglovsunderlag',
    ],
    faq: [
      {
        question: 'Hur lång tid tar ett attefallshus eller garage?',
        answer: 'Ett nyckelfärdigt attefallshus eller garage tar vanligtvis mellan 4 och 8 veckor från byggstart till färdigställande.',
      },
      {
        question: 'Hjälper ni till med bygglov och anmälan?',
        answer: 'Ja, vi bistår med kompletta ritningsunderlag för bygglov eller anmälan till kommunen.',
      },
    ],
  },
  {
    slug: 'renovering',
    title: 'Renovering',
    shortDescription: 'Gediget hantverk inom kök, badrum, golvläggning och fönsterbyten med fullt fokus på finish och kvalitet.',
    heroText: 'Förvandla ditt hem med noggrant hantverk och professionell renovering i Grästorp och Skaraborg.',
    detailedDescription: `Planerar du att renovera köket, badrummet eller göra en genomgripande renovering av hela bostaden? Tengene Byggservice AB hjälper dig genom hela processen med stor yrkesstolthet.

Vi utför allt från köksmontage och certifierade våtrumsarbeten till golvläggning, fönsterbyten och finsnickerier. Som privatperson nyttjar du 30 % ROT-avdrag direkt på fakturan.`,
    heroImage: '/service-renovering.webp',
    image: '/service-renovering.webp',
    href: '/tjanster#renovering',
    tag: 'Renovering',
    badge: 'ROT-avdrag 30%',
    highlights: [
      'Köksrenovering och montage',
      'Badrum och certifierade våtrum',
      'Golvläggning och finsnickeri',
      'Fönster- och dörrbyten',
    ],
    faq: [
      {
        question: 'Hur fungerar ROT-avdraget vid renovering?',
        answer: 'Som privatperson kan du dra av 30 % av arbetskostnaden upp till 50 000 kr per person och år. Vi sköter all administration direkt med Skatteverket och drar beloppet på fakturan.',
      },
      {
        question: 'Kan man bo kvar under renoveringstiden?',
        answer: 'Vid mindre renoveringar går det alldeles utmärkt. Vid större projekt planerar vi arbetet i etapper så att din vardag påverkas så lite som möjligt.',
      },
    ],
  },
  {
    slug: 'tillbyggnad',
    title: 'Tillbyggnad',
    shortDescription: 'Fler kvadratmeter boyta, inglasade uterum, rymliga altaner och taklyft anpassade efter husets arkitektur.',
    heroText: 'Skapa mer plats att leva på med kundanpassade tillbyggnader och altaner i Grästorp med omnejd.',
    detailedDescription: `Behöver du större boyta, ett nytt sovrum eller en rymlig altan? En genomtänkt tillbyggnad är det bästa sättet att öka både trivsel och fastighetsvärde.

Vi bygger till villor och fritidshus med nyckelfärdiga lösningar som harmonierar med husets befintliga stil och arkitektur.`,
    heroImage: '/service-ombyggnation.webp',
    image: '/service-ombyggnation.webp',
    href: '/tjanster#tillbyggnad',
    tag: 'Tillbyggnad',
    badge: 'Kundanpassat',
    highlights: [
      'Utbyggnad av villa och fritidshus',
      'Altaner, trädäck och verandor',
      'Inglasade uterum',
      'Taklyft och fasadarbeten',
    ],
    faq: [
      {
        question: 'Krävs det bygglov för tillbyggnad?',
        answer: 'Mindre tillbyggnader upp till 15 kvm (attefallsutbyggnad) och altaner under vissa höjder kan ofta utföras utan bygglov. Vi hjälper dig med alla nödvändiga handlingar.',
      },
    ],
  },
  {
    slug: 'totalentreprenad',
    title: 'Totalentreprenad',
    shortDescription: 'Ett samlat helhetsansvar från planering till godkänt och nyckelfärdigt resultat.',
    heroText: 'Bekymmersfritt byggande – en enda kontaktperson för alla hantverkare.',
    detailedDescription: `Med totalentreprenad från Tengene Byggservice AB slipper du samordna snickare, elektriker, rörmokare och målare på egen hand.

Andreas Andersson är din personliga kontaktperson genom hela projektet. Vi tar det fulla ansvaret för planering, kvalitet och genomförande med fasta priser och tydliga tidsplaner.`,
    heroImage: '/service-totalentreprenad.webp',
    image: '/service-totalentreprenad.webp',
    href: '/tjanster#totalentreprenad',
    tag: 'Totalentreprenad',
    badge: '100% Trygghet',
    highlights: [
      'En enda projektledare (Andreas Andersson)',
      'Tydlig planering och visualisering före start',
      'Full samordning av el, VVS, snickeri och måleri',
      'Tydlig tidsplan och fast pris',
    ],
    faq: [
      {
        question: 'Vad innebär totalentreprenad för mig som beställare?',
        answer: 'Du har endast ett avtal och en kontaktperson. Vi leder och ansvarar för alla yrkesgrupper så att hela bygget flyter på tryggt och enligt tidsplan.',
      },
      {
        question: 'Får jag ett fast pris på hela entreprenaden?',
        answer: 'Ja, vi går noggrant igenom projektet och lämnar en fast offert så att du har full kontroll på ekonomin från start till mål.',
      },
    ],
  },
];

export default services;
