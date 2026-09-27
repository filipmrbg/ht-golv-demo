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
    alt: 'Tengene Byggservice AB',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'Tengene Byggservice AB',
  },
  ogImage: {
    url: '/og-image.png',
    alt: 'Tengene Byggservice AB Logotyp',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'Tengene Byggservice AB hantverk och byggverksamhet i Grästorp och Skaraborg',
    },
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_3G5LlmMYORSdAk8SxzXrK2S0Is5/hf_20260919_153039_cce52f57-f8cb-482d-b79e-29c767cfbbee.mp4',
  },

  services: {
    nybyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Nybyggnation, garage och attefallshus i Grästorp och Skaraborg',
    },
    smahusbyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Småhusbyggnation och attefallshus i Skaraborg',
    },
    renovering: {
      url: '/service-renovering.webp',
      alt: 'Totalrenovering, kök och badrum i Grästorp med omnejd',
    },
    ombyggnation: {
      url: '/service-ombyggnation.webp',
      alt: 'Ombyggnation, tak och tillbyggnad i Skaraborg',
    },
    totalentreprenad: {
      url: '/service-totalentreprenad.webp',
      alt: 'Totalentreprenad med trygghet och kvalitet i Grästorp',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'Tengene Byggservice AB bygg och snickeriarbete',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'Tengene Byggservice AB renovering och interiör',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'Tengene Byggservice AB badrum och våtrum',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'Tengene Byggservice AB altan och utemiljö',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'Tengene Byggservice AB tak och fasad',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'Tengene Byggservice AB färdigställt byggprojekt',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'Tengene Byggservice AB projekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'Tengene Byggservice AB arbetsplats Grästorp',
    },
  },

  about: {
    hero: {
      url: '/about-us.jpg',
      alt: 'Tengene Byggservice AB grundare och verksamhet',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'Teammedlem Tengene Byggservice AB',
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
        url: '/gallery/gallery-1.jpg',
        alt: 'Totalrenovering villa i Grästorp',
      },
      title: 'Totalrenovering Villa',
      category: 'Totalentreprenad',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Kök och interiörrenovering',
      },
      title: 'Kök & Interiör',
      category: 'Renovering',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Badrumsrenovering och plattsättning',
      },
      title: 'Badrum & Våtrum',
      category: 'Renovering',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Altanbygge och trädäck i Grästorp',
      },
      title: 'Altan & Utemiljö',
      category: 'Tillbyggnad',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Tak och fasadarbete Skaraborg',
      },
      title: 'Tak & Fasad',
      category: 'Renovering',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Nybyggnation och stomresning',
      },
      title: 'Nybyggnation & Stomresning',
      category: 'Nybyggnation',
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

