const baseConfig = {
  weddingDay: "Sábado",
  weddingTime: "15:00 - 22:00",
  weddingDate: "14 de Dezembro de 2024",
  showBuiltWithInfo: true,
  showQrCode: false,
  calendarInfo: {
    timeStartISO: "2024-12-14T15:00:00-03:00",
    timeEndISO: "2024-12-14T22:00:00-03:00"
  },
  coupleInfo: {
    brideName: "Polly",
    groomName: "Felipe",
    coupleNameFormat: "GROOM_FIRST"
  },
  venue: {
    name: "Jardim Allegretto",
    addressLine1: "R. Mercês, 250,",
    addressLine2: "Chacara Dom Emilio,",
    city: "Foz do Iguaçu",
    country: "Paraná",
    mapUrl: "https://maps.app.goo.gl/ZiuvP3X4V6Yz77Mm8"
  },
  logo: {
    headerLogo: "/assets/images/ring-svg.png",
    footerLogo: "/assets/images/fp-logo.png",
    footerLogoType: "png"
  },
  ogTags: {
    logo: "/assets/images/aw-ring-logo.png",
    siteName: "felipeepolly.vercel.app",
    publishedTime: "2024-09-11"
  }
};

const lang = {
  id: {
    weddingDay: "Sábado",
    weddingDate: "14 de Dezembro de 2024",
    venue: {
      ...baseConfig.venue,
      name: "Hotel Oval",
      addressLine2: "Surabaya, Jawa Timur, 60241,",
    }
  }
};

export default {
  ...baseConfig,
  lang
};
