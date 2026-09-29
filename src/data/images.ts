/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 * To customize for a new company: replace the URLs below.
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  ogImage?: ImageSlot;
  hero: {
    background: ImageSlot;
    videoUrl?: string;
  };
  services: {
    nybyggnation?: ImageSlot;
    smahusbyggnation?: ImageSlot;
    renovering?: ImageSlot;
    ombyggnation?: ImageSlot;
    totalentreprenad?: ImageSlot;
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
  servicePages: {
    markarbete: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    dranering: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    betong: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
  };
}

const images: SiteImages = {
  logo: {
    url: '/logo.png',
    alt: 'HT Golv i Stenungsund AB',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'HT Golv i Stenungsund AB',
  },
  ogImage: {
    url: '/og-image.png',
    alt: 'HT Golv i Stenungsund AB Logotyp',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'HT Golv i Stenungsund AB professionell golvläggning och mattläggning i Stenungsund',
    },
    videoUrl: '/hero-video.mp4',
  },

  services: {
    nybyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Golvläggning av trä- och parkettgolv i Stenungsund',
    },
    smahusbyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Golvläggning och parkett i Stenungsund med omnejd',
    },
    renovering: {
      url: '/service-renovering.webp',
      alt: 'Mattläggning av plastmatta, linoleum och våtrumsmattor',
    },
    ombyggnation: {
      url: '/service-ombyggnation.webp',
      alt: 'Golvslipning och ytbehandling i Stenungsund',
    },
    totalentreprenad: {
      url: '/service-totalentreprenad.webp',
      alt: 'Fastighetsförvaltning och golventreprenad i Stenungsund',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.mp4',
      alt: 'Mattläggning och svetsning av plastmatta och vinylgolv',
    },
    {
      url: '/gallery/gallery-2.mp4',
      alt: 'Schackmönstrad golvbeläggning i offentlig lokal',
    },
    {
      url: '/gallery/gallery-3.mp4',
      alt: 'Golvavjämning, primning och flytspackling',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'Läggning av trägolv och parkett i bostad',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'HT Golv i Stenungsund AB hantverk',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'HT Golv i Stenungsund AB golvarbete',
    },
  },

  about: {
    hero: {
      url: '/about.webp',
      alt: 'HT Golv i Stenungsund AB hantverkare lägger trägolv',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'HT Golv i Stenungsund AB',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant hantverk i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från idé och planering till färdigt resultat',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-1.mp4',
        alt: 'Mattläggning och svetsning av plastmatta',
      },
      title: 'Mattläggning & Svetsning',
      category: 'Mattläggning',
    },
    {
      image: {
        url: '/gallery/gallery-2.mp4',
        alt: 'Schackmönstrad golvbeläggning i offentlig lokal',
      },
      title: 'Offentlig Miljö & Lokal',
      category: 'Golvbeläggning',
    },
    {
      image: {
        url: '/gallery/gallery-3.mp4',
        alt: 'Golvavjämning och flytspackling',
      },
      title: 'Underarbete & Golvavjämning',
      category: 'Golvavjämning',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Läggning av parkett och trägolv',
      },
      title: 'Trä- & Parkettläggning',
      category: 'Golvläggning',
    },
  ],

  servicePages: {
    markarbete: {
      hero: {
        url: '/service-markarbete.webp',
        alt: 'Markarbete och schaktning',
      },
      section1: {
        url: '/service-markarbete.webp',
        alt: 'Förberedelse för tomtplanering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbetsplats Stockholm',
      },
    },
    dranering: {
      hero: {
        url: '/service-dranering.webp',
        alt: 'Dränering av husgrund',
      },
      section1: {
        url: '/service-dranering.webp',
        alt: 'Fuktskydd och dränering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Dräneringsarbete',
      },
    },
    betong: {
      hero: {
        url: '/service-betong.webp',
        alt: 'Gjutning av betongplatta',
      },
      section1: {
        url: '/service-betong.webp',
        alt: 'Stenläggning och armering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Färdig betonggrund',
      },
    },
  },
};

export default images;

